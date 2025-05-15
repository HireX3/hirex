import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class VerificationToken {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ unique: true })
  token!: string

  @Column()
  expires!: Date

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
} 