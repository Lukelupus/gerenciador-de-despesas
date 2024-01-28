import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { User } from 'src/domain/entities';

export class CreateExpenseDto {
  @IsString()
  @MaxLength(191)
  @IsNotEmpty()
  desciption: string;
  @IsDate()
  @IsNotEmpty()
  date: Date;
  @IsNotEmpty()
  @IsUUID()
  user_id: User;
  @IsNotEmpty()
  value: number;
}
