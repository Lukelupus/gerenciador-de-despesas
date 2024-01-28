import { Expense } from 'src/domain/entities';

abstract class ExpensesRepository {
  abstract findById(id: number): Promise<Expense | void>;
}

export { ExpensesRepository };
