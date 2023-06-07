import express from "express";
import "express-async-errors";
import { config } from "dotenv";
import cors from "cors";
import { loggerMiddleware } from "../middlewares/logger";
import { prismaClient } from "./prismaClient";
import { Prisma } from "@prisma/client";
import { errorMiddleware } from "../middlewares/error";
import { BadRequestError } from "../errors/badRequest";
import { CreateCustomer, UpdateCustomer } from "./types";
import { NotFoundError } from "../errors/NotFoundError";

config();
const app = express();
const url = process.env.API_BASE_URL ?? "http://localhost";
const port = process.env.API_PORT ?? 3300;
app.use(express.json());
app.use(cors());
// app.use(loggerMiddleware);

app.get("/", (request, response) => {
  return response.json("server running");
});

app.get("/customers", async (request, response) => {
  // const customers = await prismaClient.$queryRaw`SELECT * FROM customers`
  const customers = await prismaClient.customers.findMany();
  return response.json(customers);
});

app.get("/customers/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const customer = await prismaClient.customers.findUnique({ where: { id } });
    return response.json(customer);
  } catch (error) {
    throw new BadRequestError("Usuário inválido");
  }
});

app.post("/customers", async (request, response) => {
  const data: CreateCustomer = request.body;
  const customer = await prismaClient.customers.create({ data });
  return response.json(customer);
});

app.put("/customers/:id", async (request, response) => {
  const id = request.params.id;
  const data: UpdateCustomer = request.body;

//   const customerExists = await prismaClient.customers.findUnique({where: {id}})

//   if (!customerExists) {
//     throw new NotFoundError('Cliente não existe')
//   }

  const customer = await prismaClient.customers.upsert({
    create: { ...data, id },
    update: { ...data },
    where: { id },
  });
  return response.json(customer);
});

app.delete("/customers/:id", async (request, response) => {
    const id = request.params.id;
    const data: UpdateCustomer = request.body;
  
    const customerExists = await prismaClient.customers.findUnique({where: {id}})
  
    if (!customerExists) {
      throw new NotFoundError('Cliente não existe')
    }
  
    await prismaClient.customers.delete({
      where: { id },
    });

    return response.status(204);
  });

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});
