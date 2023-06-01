import { randomUUID } from "crypto"

type Customer = {
    id: string
    name: string
    email: string
    adress: string
}

type Order = {
    id: string
    createdAt: Date,
    deliveryId: string
    customerId: string
    products: Product[]
}

type Delivery = {
    id: string
    type: 'sedex' | 'default',
    status: 'waiting-pickup' | 'in-progress' | 'done' | 'failed',
    orderId: string
}

type Product = {
    id: string
    name: string
    unitPriceInBRL: number
    categoryId: string
    category?: Category
    order?: Order[]
}

type Category = {
    id: string
    name: string
    type: 'sports' | 'houseware' | 'electronics'
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
}

const product2: Product = {
    id: randomUUID(),
    name: 'Mx Keys',
    categoryId: category4.id,
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

