import { Product } from "./01-produto";

const product1: Readonly<Product> = {
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
}

const productAllOptional: Partial<Product> = {
    unitValue: 20
}

const productAllRequired: Required<Product> = {
    name: 'Jacket',
    amountInStock: 30,
    unitValue: 180,
    barCode: 'd3ec0645-955a-4612-a61b-1dc8c2106b21'
}

const productOmitStockAndBarCode: Omit<Product, "amountInStock" | "barCode"> = {
    name: 'Shorts',
    unitValue: 80,
}

const productOnlyNameAndValue: Pick<Product, "name" | "unitValue"> = {
    name: 'Shorts',
    unitValue: 80,
}