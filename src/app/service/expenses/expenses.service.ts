import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseDto } from '../../../domain/dto/expenses/create-expense.dto';
import { UpdateExpenseDto } from '../../../domain/dto/expenses/update-expense.dto';
import { Expense, User } from '../../../domain/entities';
import { Repository } from 'typeorm';
import { convertDateStringToDate } from '../../../shared/utils/date-formater';
import { EmailService } from 'src/infra/mailer/mailer.service';

//Regras de negócio
@Injectable()
export class ExpensesService {
  constructor(
    @Inject('EXPENSE_REPOSITORY')
    private expenseRepository: Repository<Expense>,
    private readonly emailService: EmailService,
  ) {}
  async create(user: User, createExpenseDto: CreateExpenseDto) {
    const { value, date, desciption } = createExpenseDto;
    const newExpense = new Expense();
    newExpense.value = value;
    newExpense.desciption = desciption;
    newExpense.date = convertDateStringToDate(date);
    newExpense.user_id = user;
    if (!convertDateStringToDate(date)) {
      return 'Date must be present!';
    }
    if (!user) {
      return 'Must be logged to create a expense!';
    }

    const savedExpense = this.expenseRepository.save(newExpense);
    try {
      await this.emailService.sendEmail(
        user.email,
        'Despesa Cadastrada!',
        desciption,
      );
    } catch (error) {
      console.log(error);
    }

    return savedExpense;
  }

  async getExpenseById(id: number): Promise<Expense[]> {
    const expense = await this.expenseRepository.find({ where: { id: id } });
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }
  async findOne(id: number): Promise<Expense[]> {
    return this.expenseRepository.find({ where: { id: id } });
  }
  async findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.getExpenseById(id);
    const { desciption, value, date } = updateExpenseDto;
    if (!convertDateStringToDate(date)) {
      return 'Date must be present!';
    }
    expense[0].desciption = desciption;
    expense[0].value = value;
    expense[0].date = convertDateStringToDate(date);
    return this.expenseRepository.save(expense);
  }

  async remove(id: number) {
    const expense = await this.getExpenseById(id);
    await this.expenseRepository.remove(expense);
  }
}
