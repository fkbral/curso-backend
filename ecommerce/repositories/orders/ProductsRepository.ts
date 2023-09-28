import { prismaClient } from "../../prismaClient";
import { CreateProduct, Product } from "../../types/Product";

export const IProductsRepository = "IProductsRepository"
export interface IProductsRepository {
    findById: (id: string) => Promise<Product | null>
    create: (data: CreateProduct) => Promise<Product>
}

export class ProductsRepository implements IProductsRepository {
    async findById (id: string) : Promise<Product | null> {
        const product = await prismaClient.products.findUnique({ where: { id } })
            return product 
            ? {...product, unitPriceInBRL: Number(product?.unitPriceInBRL)}
            : null
    }

    async create (data: CreateProduct) : Promise<Product> {
        const product = await prismaClient.products.create({ data });
        return {...product, unitPriceInBRL: Number(product.unitPriceInBRL)}
    } ;
}