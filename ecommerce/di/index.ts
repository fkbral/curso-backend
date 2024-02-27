import { container } from "tsyringe";
import {
  CostumersRepository,
  ICostumersRepository,
} from "../repositories/costumers/CostumersRepository";
import {
  IProductsRepository,
  ProductsRepository,
} from "../repositories/orders/ProductsRepository";
import {
  IOrderProductsRepository,
  OrderProductsRepository,
} from "../repositories/orders/OrderProductsRepository";

container.register(ICostumersRepository, CostumersRepository);
container.register(IProductsRepository, ProductsRepository);
container.register(IOrderProductsRepository, OrderProductsRepository);
