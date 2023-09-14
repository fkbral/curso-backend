import { DateTime } from "luxon";
import { CreateCostumer } from "../../types/Costumer";
import { BadRequestError } from "../../../errors";
import { CostumersRepository } from '../../repositories/costumers/CostumersRepository'

export class CreateCustomerUseCase {
  async execute(data: CreateCostumer) {
    const birthdayDateParsed = DateTime.fromJSDate(data.birthday);
    const now = DateTime.now();

    const ellapsedTime = birthdayDateParsed.diff(now, ["years"]);

    if (ellapsedTime.years < 18) {
      throw new BadRequestError("Usuário tem que ter 18 anos de idade ou mais");
    }

    const costumerRepository = new CostumersRepository()

    const costumer = await costumerRepository.create(data)

    return costumer
  }
}
