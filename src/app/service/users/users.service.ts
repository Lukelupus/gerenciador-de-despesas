/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../domain/dto/users/create-user.dto';
import { UpdateUserDto } from '../../../domain/dto/users/update-user.dto';
import { User } from '../../../domain/entities';
import { Repository } from 'typeorm';
import { HashService } from './hash.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const newUser = new User();
    newUser.email = email;
    newUser.password = await HashService.hashPassword(password);

    try {
      return this.usersRepository.save(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail(email: string): Promise<User[]> {
    return await this.usersRepository.find({ where: { email: email } });
  }

  async findById(id: number): Promise<User[]> {
    return await this.usersRepository.find({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.find({ where: { id: id } });
  }

  async remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
