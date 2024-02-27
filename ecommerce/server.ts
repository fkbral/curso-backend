import 'reflect-metadata'
import { config } from "dotenv";
import './di'
import express from "express";
import "express-async-errors";
import cors from "cors";
import { loggerMiddleware } from "../middlewares/logger";
import { errorMiddleware } from "../middlewares/error";
import { customerRouter, categoriesRouter, productsRouter } from "./routes";
import { RegisterRoutes } from './tsoa/routes';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './tsoa/swagger.json'

config();
export const app = express();
const url = process.env.API_BASE_URL ?? "http://localhost";
const port = process.env.PORT ?? 3300;
app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);

app.get("/", (request, response) => {
  return response.json("server running");
});

app.use(customerRouter)
RegisterRoutes(app)
// app.use(categoriesRouter)
app.use(productsRouter)

app.use(errorMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(
    process.env.NODE_ENV === 'production' 
    ? `Servidor rodando no endereço ${url}`
    : `Servidor rodando no endereço ${url}:${port}`
  );
});
