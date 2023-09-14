import { DateTime } from "luxon";
import { CreateCostumer } from "../../types/Costumer";
import { BadRequestError } from "../../../errors";
import { ICostumersRepository } from '../../repositories/costumers/CostumersRepository'

export class CreateCustomerUseCase {
  constructor(private costumerRepository: ICostumersRepository) {}

  async execute(data: CreateCostumer) {
    const birthdayDateParsed = DateTime.fromJSDate(data.birthday);
    const now = DateTime.now();

    const ellapsedTime = now.diff(birthdayDateParsed, ["years"]);

    if (ellapsedTime.years < 18) {
      throw new BadRequestError("Usuário tem que ter 18 anos de idade ou mais");
    }

    const costumer = await this.costumerRepository.create(data)

    return costumer
  }
}
