import { User } from 'src/domain/entities';

abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<User | void>;
}

export { UsersRepository };
