import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import type { User } from "./User"

@Entity()
export class Session {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ unique: true })
  sessionToken!: string

  @Column()
  userId!: string

  @Column()
  expires!: Date

  @ManyToOne("User", "sessions", { onDelete: "CASCADE" })
  user!: User

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
} 