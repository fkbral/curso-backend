import { DateTime } from "luxon";
import { CreateCostumer } from "../../types/Costumer";
import { BadRequestError } from "../../../errors";
import { ICostumersRepository } from '../../repositories/costumers/CostumersRepository'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateCustomerUseCase {
  constructor(
    @inject(ICostumersRepository)
    private costumerRepository: ICostumersRepository
    ) {}

  async execute(data: CreateCostumer) {
    const birthdayDateParsed = DateTime.fromJSDate(typeof data.birthday === 'string' ? new Date(data.birthday) : data.birthday);
    const now = DateTime.now();

    const ellapsedTime = now.diff(birthdayDateParsed, ["years"]);

    if (ellapsedTime.years < 18) {
      throw new BadRequestError("Usuário tem que ter 18 anos de idade ou mais");
    }

    const costumer = await this.costumerRepository.create(data)

    return costumer
  }
}
