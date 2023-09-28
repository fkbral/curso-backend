import { z } from "zod"
import { Category } from "./Category"

export const ProductSchema = z.object({
    id: z.string().uuid({message: 'O id precisa ser um UUID'}),
    name: z.string(),
    unitPriceInBRL: z.coerce.number(),
    categoryId: z.string().uuid(),
    quantityInStock: z.number()
})

export const CreateProductSchema = ProductSchema.pick({
    name: true,
    type: true,
    unitPriceInBRL: true,
    categoryId: true,
    quantityInStock: true,
})

export type Product = z.infer<typeof ProductSchema> & {
    category?: Category
    // order?: Order[]
}

export type CreateProduct = z.infer<typeof CreateProductSchema> 


