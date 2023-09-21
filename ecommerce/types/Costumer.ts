import { z } from "zod"

export const CostumerSchema = z.object({
    id: z.string().uuid({message: 'O id precisa ser um UUID'}),
    name: z.string().nullish(),
    email: z.string().email().nullish(),
    address: z.string().nullish(),
    cpf: z.string(),
    birthday: z.coerce.date()
})

export const CreateCostumerSchema = CostumerSchema.pick({
    name: true,
    email: true,
    address: true,
    cpf: true,
    birthday: true
})

export type Costumer = z.infer<typeof CostumerSchema>
export type CreateCostumer = z.infer<typeof CreateCostumerSchema>
export type UpdateCostumer = z.infer<typeof CreateCostumerSchema>