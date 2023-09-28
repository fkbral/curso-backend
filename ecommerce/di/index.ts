import { container } from 'tsyringe'
import { CostumersRepository, ICostumersRepository } from '../repositories/costumers/CostumersRepository'
import { IOrderProductsRepository } from './fakes'
import { IProductsRepository, ProductsRepository } from '../repositories/orders/ProductsRepository'
import { OrderProductsRepository } from '../repositories/orders/OrderProductsRepository'

container.register(ICostumersRepository, CostumersRepository)
container.register(IProductsRepository, ProductsRepository)
container.register(IOrderProductsRepository, OrderProductsRepository)