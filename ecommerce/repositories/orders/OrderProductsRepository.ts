import { prismaClient } from "../../prismaClient";
import { CreateOrderProduct, OrderProduct } from "../../types/OrderProducts";

export const IOrderProductsRepository = "IOrderProductsRepository"
export interface IOrderProductsRepository {
    create: (data: CreateOrderProduct) => Promise<OrderProduct>
}

export class OrderProductsRepository implements IOrderProductsRepository {
    async create (data: CreateOrderProduct) : Promise<OrderProduct> {
        const orderProduct = await prismaClient.order_products.create({ data });
        return orderProduct
    } ;
}