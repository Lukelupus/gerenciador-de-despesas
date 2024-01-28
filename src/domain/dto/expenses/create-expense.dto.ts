import { IsNotEmpty, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @MaxLength(191)
  @IsNotEmpty()
  desciption: string;
  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsPositive()
  value: number;
}
