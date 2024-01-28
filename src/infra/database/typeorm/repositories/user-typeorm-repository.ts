import { Repository } from 'typeorm';
import { UsersRepository } from '../../repositories';
import { User } from 'src/domain/entities';

class TypeormUsersRepository implements UsersRepository {
  constructor(private model: Repository<User>) {}

  async findByEmail(email: string): Promise<User | void> {
    try {
      const result = await this.model.findOne({
        where: { email: email },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export { TypeormUsersRepository };
