import { randomUUID } from "crypto"
import { z } from "zod"
import { Category } from "./types/Category"
import { Product } from "./types/Product"

export const CustomerSchema = z.object({
    id: z.string().uuid({message: 'O id precisa ser um UUID'}),
    name: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
})

export const CreateCustomerSchema = CustomerSchema.pick({
    name: true,
    email: true,
    address: true
})

export type Customer = z.infer<typeof CustomerSchema>
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>
export type UpdateCustomer = z.infer<typeof CreateCustomerSchema>

export type Order = {
    id: string
    createdAt: Date,
    updatedAt: Date,
    deletedAt?: Date,
    deliveryId: string
    customerId: string
    products: OrderProduct[]
}

export type OrderProduct = {
    order_id: string
    product_id: string
    quantity: number
}

export type Delivery = {
    id: string
    type: 'sedex' | 'default',
    status: 'waiting-pickup' | 'in-progress' | 'done' | 'failed',
    orderId: string
}

const category1 : Category = {
    id: randomUUID(),
    name: 'computers',
    type: 'electronics'
}

const category2 : Category = {
    id: randomUUID(),
    name: 'printer',
    type: 'electronics'
}

const category3 : Category = {
    id: randomUUID(),
    name: 'mouse',
    type: 'electronics'
}

const category4 : Category = {
    id: randomUUID(),
    name: 'keyboard',
    type: 'electronics'
}

const product1: Product = {
    id: randomUUID(),
    name: 'Mx Master 3',
    categoryId: category3.id,
    unitPriceInBRL: 100,
}

const product2: Product = {
    id: randomUUID(),
    name: 'Mx Keys',
    categoryId: category4.id,
    unitPriceInBRL: 400,
}

const customer1: Customer = {
    id: randomUUID(),
    name: 'Fulano',
    email: 'fulano@gmail.com',
    adress: 'Rua X'
}

const delivery1: Delivery = {
    id: randomUUID(),
    status: 'done',
    type: 'sedex',
}

const order1: Order = {
    id: randomUUID(),
    customerId: customer1.id,
    deliveryId: delivery1.id,
    orderDate: new Date(),
    products: [product1, product2]
}

