import { Router } from "express";
import { prismaClient } from "../prismaClient";
import { BadRequestError, NotFoundError, ServerError } from "../../errors";
import { CreateProduct, CreateProductSchema } from "../types/Product";
import { ZodError } from "zod";

export const productsRouter = Router()
const url = "/products"

productsRouter.get(`${url}`, async (request, response) => {
    try {
      const products = await prismaClient.products.findMany({
        select: {
          id: true,
          name: true,
          unit_price_in_brl: true,
          category_id: true,
          category: {
            select: {
              name: true,
            }
          }
        },
        orderBy: [
          { 
            name: 'asc' 
          },
          {
            category: {
              name: 'asc'
            }
          }
        ]
      });

      if(products.length === 0) {
        throw new NotFoundError("Produtos não encontrados");
      }

      return response.json(products);
    } catch (error) {
      throw new ServerError();
    }
  });

productsRouter.get(`${url}/:id`, async (request, response) => {
    try {
      const id = request.params.id;
      const product = await prismaClient.products.findUnique({ where: { id } });
      return response.json(product);
    } catch (error) {
      throw new BadRequestError("Produto inválido");
    }
  });
  
productsRouter.post(`${url}`, async (request, response) => {
  try {
    const data: CreateProduct = request.body;

    // CreateProductSchema.parse(data)
    // const product = await prismaClient.products.create(
    //   { data: { category: {connect: {id: data.categoryId}}}}
    // );
    const product = await prismaClient.products.create({data});
    return response.json(product);
  } 
  catch (error) {
    if (error instanceof ZodError) {
      throw error
    }
    throw new ServerError();
  }
});