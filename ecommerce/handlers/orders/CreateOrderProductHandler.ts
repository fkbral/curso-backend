import { container } from "tsyringe"
import { CreateOrderProduct } from "../../types/OrderProducts"
import { CreateOrderProductUseCase } from "../../useCases/orders/CreateOrderProduct"

export class CreateOrderProductHandler {
    async handle(data: CreateOrderProduct) {
        const createOrderProduct = container.resolve(CreateOrderProductUseCase)

        const orderProduct = await createOrderProduct.execute(data)

        return orderProduct
    }
}