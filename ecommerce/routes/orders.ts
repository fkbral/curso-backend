import { Router } from "express";
import { container } from "tsyringe";
import { CreateOrderProductUseCase } from "../useCases/orders/CreateOrderProduct";
import { CreateOrderProduct } from "../types/OrderProducts";
import { CreateOrderProductHandler } from "../handlers/orders/CreateOrderProductHandler";

export const ordersRouter = Router()
const url = '/orders'

ordersRouter.get(url, async (request, response) => {
});
  
ordersRouter.post(url, async (request, response) => {
    const data: CreateOrderProduct = request.body

    const handler = new CreateOrderProductHandler()

    const orderProduct = await handler.handle(data)

    return response.json(orderProduct)
});
  