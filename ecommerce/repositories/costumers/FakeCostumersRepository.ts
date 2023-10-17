import { randomUUID } from "crypto"
import { Costumer, CreateCostumer } from "../../types/Costumer"
import { ICostumersRepository } from "./CostumersRepository"

export class FakeCostumersRepository implements ICostumersRepository {
    async create (data: CreateCostumer) : Promise<Costumer> {
      const costumer = {id: randomUUID(), ...data}
      return costumer
  } ;
  }