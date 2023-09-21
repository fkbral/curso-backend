import { container } from 'tsyringe'
import { CostumersRepository, ICostumersRepository } from '../repositories/costumers/CostumersRepository'
import { FakeProductsRepository, IProductsRepository } from '../useCases/orders/CreateOrderProduct.spec'

container.register(ICostumersRepository, CostumersRepository)
container.register(IProductsRepository, FakeProductsRepository)