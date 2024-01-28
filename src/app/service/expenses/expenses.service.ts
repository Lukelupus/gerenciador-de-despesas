import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseDto } from '../../../domain/dto/expenses/create-expense.dto';
import { UpdateExpenseDto } from '../../../domain/dto/expenses/update-expense.dto';
import { Expense, User } from 'src/domain/entities';
import { Repository } from 'typeorm';
import { convertDateStringToDate } from 'src/shared/utils/date-formater';

//Regras de negócio
@Injectable()
export class ExpensesService {
  constructor(
    @Inject('EXPENSE_REPOSITORY')
    private expenseRepository: Repository<Expense>,
  ) {}
  async create(user: User, createExpenseDto: CreateExpenseDto) {
    const { value, date, desciption } = createExpenseDto;
    const newExpense = new Expense();
    console.log(user);
    newExpense.value = value;
    newExpense.desciption = desciption;
    newExpense.date = convertDateStringToDate(date);
    newExpense.user_id = user;

    if (!user) {
      return 'Must be logged to create a expense!';
    }

    return this.expenseRepository.save(newExpense);
  }

  async getExpenseById(id: number): Promise<Expense[]> {
    const expense = await this.expenseRepository.find({ where: { id: id } });
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }
  // InterceptorError @Global
  async findExpenseByUser(user: User): Promise<Expense[]> {
    return this.expenseRepository.find({ where: { user_id: user } });
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.getExpenseById(id);
    expense[0].desciption = updateExpenseDto.desciption;
    expense[0].value = updateExpenseDto.value;
    return this.expenseRepository.save(expense);
  }

  async remove(id: number) {
    const expense = await this.getExpenseById(id);
    await this.expenseRepository.remove(expense);
  }
}
