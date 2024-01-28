import { Expense } from 'src/domain/entities';
import { DataSource } from 'typeorm';

export const expenseProviders = [
  {
    provide: 'EXPENSE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Expense),
    inject: ['DATA_SOURCE'],
  },
];
