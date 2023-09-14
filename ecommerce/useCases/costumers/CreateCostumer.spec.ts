import { describe, it, expect } from 'vitest'
import { CreateCustomerUseCase } from './CreateCostumer'
import { BadRequestError } from '../../../errors'
import { DateTime } from 'luxon'
import { Costumer, CreateCostumer } from '../../types/Costumer'
import { randomUUID } from 'crypto'
import { ICostumersRepository } from '../../repositories/costumers/CostumersRepository'

class FakeCostumersRepository implements ICostumersRepository {
  async create (data: CreateCostumer) : Promise<Costumer> {
    const costumer = {id: randomUUID(), ...data}
    return costumer
} ;
}

describe("Create Costumer Use Case", () => {
  it('should not be able to create a costumer who is underage', async () => {
    const costumerRepository = new FakeCostumersRepository()

    const createCustomerUseCase = new CreateCustomerUseCase(costumerRepository)
    const costumer = createCustomerUseCase.execute({
      birthday: new Date(),
      cpf: '123.456.789-01'
    })

    expect(costumer).rejects.toThrowError(
      new BadRequestError("Usuário tem que ter 18 anos de idade ou mais")
    )
  })

  it('should be able to create a costumer who is an adult', async () => {
    const costumerRepository = new FakeCostumersRepository()

    const createCustomerUseCase = new CreateCustomerUseCase(costumerRepository)
    const adultBithday = DateTime.fromFormat('03/10/1998', 'dd/MM/yyyy')

    const costumer = await createCustomerUseCase.execute({
      birthday: adultBithday.toJSDate(),
      cpf: '123.456.789-01'
    })

    expect(costumer).toEqual(expect.objectContaining({cpf: '123.456.789-01'}))
  })
})