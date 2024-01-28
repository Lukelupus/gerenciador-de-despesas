import { DataSource } from 'typeorm';
import { Expense, User } from 'src/domain/entities/index';
import { config } from 'dotenv';

config();
class Database {
  static initialize() {
    const expense_manager_database = new DataSource({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      entities: [User, Expense],
      synchronize: true,
    });
    expense_manager_database.initialize();
    return { expense_manager_database };
  }
}

const connections = Database.initialize();

export { connections };
