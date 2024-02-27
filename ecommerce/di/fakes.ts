import { container } from "tsyringe";
import { ICostumersRepository } from "../repositories/costumers/CostumersRepository";
import { Product } from "../types/Product";
import { randomUUID } from "crypto";
import { FakeCostumersRepository } from "../repositories/costumers/FakeCostumersRepository";
import { IOrderProductsRepository } from "../repositories/orders/OrderProductsRepository";
import { CreateOrderProduct, OrderProduct } from "../types/OrderProducts";

export const IProductsRepository = "IProductsRepository";
export type ProductsRepository = {
  findById(id: string): Product;
};
export class FakeProductsRepository {
  findById(id: string): Product {
    return {
      id,
      categoryId: randomUUID(),
      name: "Mouse",
      quantityInStock: 10,
      unitPriceInBRL: 50,
    };
  }
}

export class FakeOrderProductsRepository implements IOrderProductsRepository {
  async create(data: CreateOrderProduct): Promise<OrderProduct> {
    const fakeOrderProduct: OrderProduct = {
      id: randomUUID(),
      orderId: data.orderId,
      productId: data.productId,
      quantity: data.quantity,
    };

    return fakeOrderProduct;
  }
}

container.register(ICostumersRepository, FakeCostumersRepository);
container.register(IOrderProductsRepository, FakeOrderProductsRepository);
container.register(IProductsRepository, FakeProductsRepository);
