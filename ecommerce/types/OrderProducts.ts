import { z } from "zod"

export const OrderProductSchema = z.object({
  id: z.string(),
  productId: z.string(),
  orderId: z.string(),
  quantity: z.number().optional().default(1),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  // orders     : orders
  // products   : products
});

export const CreateOrderProductSchema = OrderProductSchema.pick({
    productId: true,
    orderId: true,
    quantity: true,
})

export type OrderProduct = z.infer<typeof OrderProductSchema>
export type CreateOrderProduct = z.infer<typeof CreateOrderProductSchema>


