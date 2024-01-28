import { User } from '../../../domain/entities';
import { DataSource } from 'typeorm';

export const usersRepository = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
