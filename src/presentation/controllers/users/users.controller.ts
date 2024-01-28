import { Controller, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from '../../../app/service/users/users.service';
import { CreateUserDto } from '../../../domain/dto/users/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.usersService.findByEmail(userData);
  }

  @Post('/register')
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.usersService.create(userData);
  }

  @Delete(':id')
  remove(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.usersService.remove(userData);
  }
}
