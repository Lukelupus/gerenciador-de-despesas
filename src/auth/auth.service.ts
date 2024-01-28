import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/app/service/users/users.service';
import { User } from 'src/domain/entities';
import { HashService } from 'src/app/service/users/hash.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    const matchPassword = await HashService.comparePasswords(
      pass,
      user[0].password,
    );

    if (!matchPassword) {
      throw new UnauthorizedException();
    }

    return user[0];
  }
  async validateUserById(id: number): Promise<User> {
    const user = await this.usersService.findById(id);

    return user[0];
  }
  async generateToken(user: User): Promise<string> {
    const payload = { email: user.email, sub: user.id };

    return await this.jwtService.signAsync(payload);
  }
}
