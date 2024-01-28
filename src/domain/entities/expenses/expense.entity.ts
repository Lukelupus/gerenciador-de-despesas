import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity(`${process.env.DATABASE_NAME}.expense`)
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 191, nullable: false })
  desciption: string;

  @Column({ type: 'timestamp', nullable: false })
  date: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'User_Id' })
  user_id: User;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
  value: number;
}
