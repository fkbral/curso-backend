import { prismaClient } from "../../prismaClient";
import { CreateCostumer, Costumer } from "../../types/Costumer";

export interface ICostumersRepository {
    create: (data: CreateCostumer) => Promise<Costumer>
}

export class CostumersRepository implements ICostumersRepository {
    async create (data: CreateCostumer) : Promise<Costumer> {
        const costumer = await prismaClient.customers.create({ data });
        return costumer
    } ;
}