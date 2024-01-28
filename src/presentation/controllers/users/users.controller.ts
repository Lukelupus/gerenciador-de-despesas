import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from '../../../app/service/users/users.service';
import { CreateUserDto } from '../../../domain/dto/users/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async loginUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.authService.validateUser(email, password);
    const accessToken = await this.authService.generateToken(user);
    return { accessToken };
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async findAll(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
