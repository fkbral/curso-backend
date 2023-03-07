export type Product = {
    name: string
    amountInStock: number
    unitValue: number
    barCode?: string
}

const product1: Product = {
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
}

const product2: Product = {
    name: 'T-Shirt',
    amountInStock: 500,
    unitValue: 45,
}