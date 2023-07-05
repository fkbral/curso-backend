import express from "express";
import "express-async-errors";
import { config } from "dotenv";
import cors from "cors";
import { loggerMiddleware } from "../middlewares/logger";
import { errorMiddleware } from "../middlewares/error";
import { customerRouter, categoriesRouter, productsRouter } from "./routes";

config();
export const app = express();
const url = process.env.API_BASE_URL ?? "http://localhost";
const port = process.env.API_PORT ?? 3300;
app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);

app.get("/", (request, response) => {
  return response.json("server running");
});

app.use(customerRouter)
app.use(categoriesRouter)
app.use(productsRouter)

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});
