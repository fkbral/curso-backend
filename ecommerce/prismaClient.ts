import { Prisma, PrismaClient } from "@prisma/client";

type Enviroment = "development" | "test" | "production";
const enviroment = (process.env.NODE_ENV || "development") as Enviroment;

const mapEnvToDbName: Record<Enviroment, string> = {
  development:
    process.env.DATABASE_URL ||
    "postgresql://postgres:dockerServer1000@localhost:5431/ecommerce?schema=public",
  test: "postgresql://postgres:dockerServer1000@localhost:5431/testsdb?schema=public",
  production: process.env.DATABASE_URL as string,
};

const clientOptions: Prisma.PrismaClientOptions = {
  datasources: { db: { url: mapEnvToDbName[enviroment] } },
};

export const prismaClient = new PrismaClient(clientOptions);
