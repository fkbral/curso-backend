import { Router } from "express";
import { prismaClient } from "../prismaClient";
import { BadRequestError, NotFoundError } from "../../errors";
import { CreateCategory } from "../types/Category";

export const categoriesRouter = Router()
const url = "/categories"

categoriesRouter.get(`${url}`, async (request, response) => {
    try {
      const categories = await prismaClient.categories.findMany();
      return response.json(categories);
    } catch (error) {
      throw new NotFoundError("Categorias não encontradas");
    }
  });

categoriesRouter.get(`${url}/:id`, async (request, response) => {
    try {
      const id = request.params.id;
      const category = await prismaClient.categories.findUnique({ where: { id } });
      return response.json(category);
    } catch (error) {
      throw new BadRequestError("Categoria inválida");
    }
  });
  
categoriesRouter.post(`${url}`, async (request, response) => {
    const data: CreateCategory = request.body;
    const category = await prismaClient.categories.create({ data });
    return response.json(category);
});