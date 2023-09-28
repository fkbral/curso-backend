import { injectable, inject } from 'tsyringe'
import { CreateOrderProduct } from "../../types/OrderProducts";
import { BadRequestError } from '../../../errors';
import { IProductsRepository, ProductsRepository } from '../../di/fakes';
import { IOrderProductsRepository } from '../../repositories/orders/OrderProductsRepository';

@injectable()
export class CreateOrderProductUseCase {
  constructor(
    @inject(IOrderProductsRepository)
    private orderProductsRepository: IOrderProductsRepository,
    @inject(IProductsRepository)
    private productsRepository: ProductsRepository,
    ) {}
    

  async execute(data: CreateOrderProduct) {
    const product = this.productsRepository.findById(data.productId)

    if (product.quantityInStock < data.quantity) {
      throw new BadRequestError('O produto não tem estoque suficiente')
    }

    const orderProduct = await this.orderProductsRepository.create(data)

    return orderProduct
  }
}
