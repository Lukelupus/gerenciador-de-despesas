import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity(`${process.env.DATABASE_NAME}.user`)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;
}
