import 'reflect-metadata'
import { describe, it, expect, beforeAll } from 'vitest'
import { CreateCustomerUseCase } from './CreateCostumer'
import { BadRequestError } from '../../../errors'
import { DateTime } from 'luxon'
import { container } from 'tsyringe'
import { FakeCostumersRepository } from '../../repositories/costumers/FakeCostumersRepository'

beforeAll(async () => {
  await import('../../di/fakes')
})

describe("Create Costumer Use Case", () => {
  it('should not be able to create a costumer who is underage', async () => {

    const createCustomerUseCase = container.resolve(CreateCustomerUseCase)
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