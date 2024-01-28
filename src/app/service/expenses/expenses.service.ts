import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseDto } from '../../../domain/dto/expenses/create-expense.dto';
import { UpdateExpenseDto } from '../../../domain/dto/expenses/update-expense.dto';
import { Expense, User } from 'src/domain/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//Regras de negócio
@Injectable()
export class ExpensesService {
  // constructor(
  //   @InjectRepository(Expense)
  //   private expenseRepository: Repository<Expense>,
  // ) {}
  async create(user: User, createExpenseDto: CreateExpenseDto) {
    const { value, date, desciption } = createExpenseDto;

    const newExpense = new Expense();

    newExpense.value = value;
    newExpense.desciption = desciption;
    newExpense.date = date;
    newExpense.user_id = user;

    // return this.expenseRepository.save(newExpense);
  }

  async getExpenseById(id: number) {
    // const expense = await this.expenseRepository.find({ where: { id: id } });
    // if (!expense) {
    //   throw new NotFoundException('Expense not found');
    // }
    // return expense;
  }
  // InterceptorError @Global
  async findExpenseByUser(user: User) {
    // return this.expenseRepository.find({ where: { user_id: user } });
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.getExpenseById(id);
    expense[0].desciption = updateExpenseDto.desciption;
    expense[0].value = updateExpenseDto.value;
    // return this.expenseRepository.save(expense);
  }

  async remove(id: number) {
    // const expense = await this.getExpenseById(id);
    // await this.expenseRepository.remove(expense);
  }
}
