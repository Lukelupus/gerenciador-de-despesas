import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExpensesService } from '../../../app/service/expenses/expenses.service';
import { CreateExpenseDto } from '../../../domain/dto/expenses/create-expense.dto';
import { UpdateExpenseDto } from '../../../domain/dto/expenses/update-expense.dto';
import { User } from 'src/domain/entities';
import { GetUser } from 'src/shared/decorators/get-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@GetUser() user: User, @Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(user, createExpenseDto);
  }

  @Get('')
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.expensesService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(+id, updateExpenseDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.expensesService.remove(+id);
  }
}
