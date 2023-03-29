// import dbJson from '.././server.json'
import { Router } from "express";
import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import path from "path";
import { readFileSync } from "fs";
import { z } from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  age: z.number().gte(0),
  email: z.string().email().optional(),
  passwordHash: z.string().min(6).max(60).optional(),
});

const CreateUserDTOSchema = z.object({
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
});

export type User = z.infer<typeof UserSchema>;

interface CreateUserDTO extends z.infer<typeof CreateUserDTOSchema> {}

const dbJsonPath = path.resolve(process.cwd(), "server.json");
const dbJsonRaw = readFileSync(dbJsonPath);
const dbJson = JSON.parse(dbJsonRaw.toString());
const users: User[] = dbJson.users;
const userRoutes = Router();

userRoutes.get("/api/users", (request, response) => {
  return response.json(users);
});

userRoutes.post("/api/users", async (request, response) => {
  const { name, age }: CreateUserDTO = request.body;

  try {
    CreateUserDTOSchema.parse({ name, age });
  } catch (error) {
    throw error;
  }

  const user = { id: randomUUID(), name, age };

  users.push(user);

  await writeFile(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  return response.status(201).json(user);
});

userRoutes.delete("/api/users/:id", async (request, response) => {
  const { id } = request.params;

  if (!id) {
    const errMessage = "O usuário a ser deletado precisa de um id";
    return response.status(400).send(errMessage);
  }

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    const errMessage = `Usuário com id ${id} não foi encontrado`;
    return response.status(400).send(errMessage);
  }

  const updatedUsers = users.filter((user) => user.id !== id);

  await writeFile(
    dbJsonPath,
    JSON.stringify({ ...dbJson, users: updatedUsers })
  );

  return response.status(204).json();
});

// module.exports = {userRoutes}
export { userRoutes };
