import 'reflect-metadata'
import { describe, it, expect, beforeAll } from 'vitest'
import { CreateOrderProductUseCase } from './CreateOrderProduct'
import { BadRequestError } from '../../../errors'
import { randomUUID } from 'crypto'
import { container } from 'tsyringe'

beforeAll(async () => {
  await import('../../di/fakes')
})

describe("Create Costumer Use Case", () => {
  it('should not be able to create an order for a product that is out of stock', async () => {
    const createOrderProductUseCase = container.resolve(CreateOrderProductUseCase)
    const order = createOrderProductUseCase.execute({
      orderId: randomUUID(),
      productId: randomUUID(),
      quantity: 11
    })

    expect(order).rejects.toThrowError(
      new BadRequestError("O produto não tem estoque suficiente")
    )
  })

  it('should be able to create an order for a product that is in stock', async () => {
    const createOrderProductUseCase = container.resolve(CreateOrderProductUseCase)
    const order = createOrderProductUseCase.execute({
      orderId: randomUUID(),
      productId: randomUUID(),
      quantity: 9
    })

    expect(order).resolves.not.toThrowError()
  })
})