/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../domain/dto/users/create-user.dto';
import { UpdateUserDto } from '../../../domain/dto/users/update-user.dto';
import { User } from 'src/domain/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('EXPENSE_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    console.log('Email: ' + email);
    return 'This action adds a new user';
  }

  async findByEmail(email: string): Promise<User[]> {
    return this.usersRepository.find({ where: { email: email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.find({ where: { id: id } });
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
