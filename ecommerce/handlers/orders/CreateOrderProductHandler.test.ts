import 'reflect-metadata'
import { beforeAll, describe, expect, it } from "vitest";
import { CreateOrderProductHandler } from "./CreateOrderProductHandler";
import { CreateOrderProduct, OrderProduct } from "../../types/OrderProducts";
import { prismaClient } from "../../prismaClient";
import { faker } from '@faker-js/faker'

beforeAll(async () => {
    await import('../../di')
})

describe('Create Order Product Handler', () => {
    it('should be able to create an order product', async () => {
        const product = await prismaClient.products.create({
            data: {
                category: {
                    create: {
                        name: faker.lorem.words(),
                        type: faker.word.noun(),
                    }
                },
                name: faker.word.noun(),
                unitPriceInBRL: faker.finance.amount(),
            }
        })

        const order = await prismaClient.orders.create({
            data: {
                id: faker.string.uuid(),
            }
        })

        const input: CreateOrderProduct = {
            orderId: order.id,
            productId: product.id,
            quantity: 5
        } 
        const createOrderProductHandler = new CreateOrderProductHandler()
        const orderProduct = await createOrderProductHandler.handle(input)

        expect(orderProduct).toEqual(expect.objectContaining({
            orderId: order.id,
            productId: product.id,
            quantity: 5
        } as OrderProduct))
    })
})