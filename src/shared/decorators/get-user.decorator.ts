// get-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/domain/entities';

export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    console.log('bateu');
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
) as ParameterDecorator;
