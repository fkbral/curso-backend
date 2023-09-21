import { container } from 'tsyringe'
import { ICostumersRepository } from '../repositories/costumers/CostumersRepository'
import { FakeCostumersRepository } from '../useCases/costumers/CreateCostumer.spec'
import { Product } from '../types/Product'
import { randomUUID } from 'crypto'

export class OrderProductsRepository {}
export const IOrderProductsRepository = "IOrderProductsRepository"

export const IProductsRepository = 'IProductsRepository'
export type ProductsRepository = {
  findById(id: string): Product
}
export class FakeProductsRepository {
  findById(id: string): Product {
    return {
      id,
      categoryId: randomUUID(),
      name: 'Mouse',
      quantityInStock: 10,
      unitPriceInBRL: 50
    }
  }
}

container.register(ICostumersRepository, FakeCostumersRepository)
container.register(IOrderProductsRepository, OrderProductsRepository)
container.register(IProductsRepository, FakeProductsRepository)