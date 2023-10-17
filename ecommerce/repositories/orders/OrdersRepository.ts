// import { prismaClient } from "../../prismaClient";
// import { Order } from "../../types";
// import { CreateCostumer, Costumer } from "../../types/Costumer";

// export const IOrdersRepository = "IOrdersRepository"
// export interface IOrdersRepository {
//     create: (data: CreateOrder) => Promise<Costumer>
// }

// export class OrdersRepository implements IOrdersRepository {
//     async create (data: CreateCostumer) : Promise<Order> {
//         const costumer = await prismaClient.customers.create({ data });
//         return costumer
//     } ;
// }