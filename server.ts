import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import { config } from "dotenv";
import path from "path";
import { User, userRoutes } from "./routes/UserRoutes";
import cors from "cors";
import { loggerMiddleware } from "./middlewares/logger";
import { authMiddleware } from "./middlewares/auth";
import { sign } from "jsonwebtoken";
import { readFileSync } from "fs";
import { errorMiddleware } from "./middlewares/error";
import { BadRequestError } from "./errors/badRequest";

config();
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(loggerMiddleware);

type SessionCreateDTO = {
  email: string
  password: string
}

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
const dbJsonRaw = readFileSync(dbJsonPath)
const dbJson = JSON.parse(dbJsonRaw.toString())
const users: User[] = dbJson.users

const url = process.env.API_BASE_URL ?? "http://localhost";
const port = process.env.API_PORT ?? 3300;
// const dbJson = readFileSync(dbJsonPath)
// const users: User[] = JSON.parse(dbJson.toString()).users

app.get("/api", (request, response) => {
  return response.status(200).send("<h1>Api Base Url</h1>");
});

app.post('/api/sessions', (request, response) => {
  const { email, password }: SessionCreateDTO = request.body

  const foundUser = users.find(user => user?.email === email)

  if (!foundUser) {
    throw new BadRequestError('Combinação de usuário e senha incorreta')
  }

  if (foundUser.passwordHash !== password) {
    throw new BadRequestError('Combinação de usuário e senha incorreta')
  }
  
  const jwtSecret = process.env.JWT_SECRET ?? ''
  const userToken = sign({ id: foundUser.id, email }, jwtSecret)

  return response.json({token: userToken})
})

app.use(authMiddleware);

app.use(userRoutes);

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});
