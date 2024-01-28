import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpensesService } from '../../../app/service/expenses/expenses.service';
import { CreateExpenseDto } from '../../../domain/dto/expenses/create-expense.dto';
import { UpdateExpenseDto } from '../../../domain/dto/expenses/update-expense.dto';
import { User } from 'src/domain/entities';
import { GetUser } from 'src/shared/decorators/get-user';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@GetUser user: User, @Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(user, createExpenseDto);
  }

  @Get(':id')
  findOne(@Param('user_id') id: User) {
    return this.expensesService.findExpenseByUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(+id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.expensesService.remove(+id);
  }
}
