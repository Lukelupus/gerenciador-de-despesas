import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { User } from 'src/domain/entities';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_TOKEN,
    });
  }

  async validate(payload: User) {
    const user = await this.authService.validateUserById(
      Object.entries(payload)[1][1],
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
