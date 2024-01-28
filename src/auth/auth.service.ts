import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/app/service/users/users.service';
import { User } from 'src/domain/entities';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: User, pass: string): Promise<User | void> {
    const user = this.usersService.findByEmail(email);
    if (user[0].password !== pass) {
      throw new UnauthorizedException();
    }

    return user[0];
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
