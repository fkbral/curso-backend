import { injectable, inject } from 'tsyringe'
import { CreateOrderProduct } from "../../types/OrderProducts";
import { BadRequestError } from '../../../errors';
import { IOrderProductsRepository, IProductsRepository, ProductsRepository } from '../../di/fakes';

type IOrderProductsRepository = {}

@injectable()
export class CreateOrderProductUseCase {
  constructor(
    @inject(IOrderProductsRepository)
    private ordersRepository: IOrderProductsRepository,
    @inject(IProductsRepository)
    private productsRepository: ProductsRepository,
    ) {}
    

  async execute(data: CreateOrderProduct) {
    const product = this.productsRepository.findById(data.productId)

    if (product.quantityInStock < data.quantity) {
      throw new BadRequestError('O produto não tem estoque suficiente')
    }

    const order = {}

    return order
  }
}
