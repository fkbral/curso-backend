import { z } from "zod"

export const CategorySchema = z.object({
    id: z.string().uuid({message: 'O id precisa ser um UUID'}),
    name: z.string(),
    type: 
        z.literal('sports')
        .or(z.literal('apparel'))
        .or(z.literal('electronics'))
        .or(z.literal('furniture'))
        .or(z.literal('garden'))
        .or(z.literal('health care'))
        .or(z.literal('houseware'))
})

export const CreateCategorySchema = CategorySchema.pick({
    name: true,
    type: true,
})

export type Category = z.infer<typeof CategorySchema>
export type CreateCategory = z.infer<typeof CreateCategorySchema>


