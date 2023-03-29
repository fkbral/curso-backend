// import dbJson from '.././server.json'
import { NextFunction, Request, Response, Router } from "express";
import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import path from "path";
import { readFileSync } from "fs";
import { z } from "zod";
import { MethodNotAllowedError } from "../errors/methodNotAllowed";
import { NotFoundError } from "../errors/NotFoundError";

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string({
      invalid_type_error: "Valor deve ser texto",
      required_error: "Propriedade Obrigatória",
    })
    .min(2),
  age: z
    .number({
      invalid_type_error: "Valor deve ser número",
      required_error: "Propriedade Obrigatória",
    })
    .gte(0),
  email: z.string().email().optional(),
  passwordHash: z.string().min(6).max(60).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional(),
});

const dateFields = {
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

const CreateUserDTOSchema = UserSchema.omit({
  id: true,
  ...{ dateFields },
});
const UpdateUserDTOSchema = UserSchema.omit({
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const PatchUserDTOSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
}).partial();
const DeleteUserDTOSchema = UserSchema.pick({ id: true });

export type User = z.infer<typeof UserSchema>;

interface CreateUserDTO extends z.infer<typeof CreateUserDTOSchema> {}
interface UpdateUserDTO extends z.infer<typeof UpdateUserDTOSchema> {}
interface PatchUserDTO extends z.infer<typeof PatchUserDTOSchema> {}
interface DeleteUserDTO extends z.infer<typeof DeleteUserDTOSchema> {}

const dbJsonPath = path.resolve(process.cwd(), "server.json");
const dbJsonRaw = readFileSync(dbJsonPath);
const dbJson = JSON.parse(dbJsonRaw.toString());
let users: User[] = dbJson.users;
const userRoutes = Router();

userRoutes.use((request: Request, response: Response, next: NextFunction) => {
  response.setHeader("Allow", "GET, POST, DELETE, HEAD");

  next();
});

userRoutes.get("/api/users", (request, response) => {
  const activeUsers = users.filter((user) => !user.deletedAt);
  return response.json(activeUsers);
});

userRoutes.post("/api/users", async (request, response) => {
  const { name, age }: CreateUserDTO = request.body;

  CreateUserDTOSchema.parse({ name, age });

  const user = { id: randomUUID(), name, age };

  users = [...users, user];

  await writeFile(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  return response.status(201).json(user);
});

userRoutes.put("/api/users/:id", async (request, response) => {
  const { id, name, age, email, passwordHash }: UpdateUserDTO = request.body;

  UpdateUserDTOSchema.parse({ id, name, age, email, passwordHash });

  const findUser: User | undefined = users.find((user) => user.id === id);
  let updatedUsers: User[] = [];

  const userToCreateOrUpdateData: Omit<
    User,
    "createdAt" | "updatedAt" | "deletedAt"
  > = {
    id,
    name,
    age,
    email,
    passwordHash,
  };

  if (findUser) {
    updatedUsers = users.map((user) =>
      user.id !== id
        ? user
        : {
            ...userToCreateOrUpdateData,
            createdAt: user.createdAt,
            updatedAt: new Date(),
            deletedAt: user.deletedAt,
          }
    );
  }

  const user = {
    ...userToCreateOrUpdateData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users = findUser ? [...updatedUsers] : [...users, user];

  await writeFile(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  return response.status(findUser ? 200 : 201).json(user);
});

userRoutes.patch("/api/users/:id", async (request, response) => {
  const { id } = request.params as { id: string };
  const data: PatchUserDTO = request.body;

  PatchUserDTOSchema.parse({ ...data });

  const findUser: User | undefined = users.find((user) => user.id === id);

  if (!findUser) {
    throw new NotFoundError(`Usuário com id ${id} não foi encontrado`);
  }

  const updatedUser: User = {
    ...findUser,
    ...data,
    createdAt: findUser?.createdAt,
    updatedAt: new Date(),
  };

  const updatedUsers = users.map((user) =>
    user.id !== id ? user : updatedUser
  );

  users = [...updatedUsers];

  await writeFile(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  return response.status(200).json(updatedUser);
});

userRoutes.delete("/api/users/:id", async (request, response) => {
  const { id } = request.params as DeleteUserDTO;
  DeleteUserDTOSchema.parse({ id });

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    const errMessage = `Usuário com id ${id} não foi encontrado`;
    throw new NotFoundError(errMessage);
  }

  // const updatedUsers = users.filter((user) => user.id !== id);
  const updatedUsers = users.map((user) =>
    user.id !== id ? user : { ...user, deletedAt: new Date() }
  );

  users = updatedUsers;

  await writeFile(
    dbJsonPath,
    JSON.stringify({ ...dbJson, users: updatedUsers })
  );

  return response.status(204).json();
});

userRoutes.use((request: Request, response: Response, next: NextFunction) => {
  throw new MethodNotAllowedError(
    "Method not allowed: only GET, POST, DELETE, HEAD methods are allowed"
  );
});

// module.exports = {userRoutes}
export { userRoutes };
