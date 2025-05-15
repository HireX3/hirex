import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import type { Account } from "./Account"
import type { Session } from "./Session"

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ nullable: true })
  name!: string

  @Column({ unique: true, nullable: true })
  email!: string

  @Column({ nullable: true })
  emailVerified!: Date

  @Column({ nullable: true })
  password!: string

  @Column({ nullable: true })
  image!: string

  @OneToMany("Account", "user")
  accounts!: Account[]

  @OneToMany("Session", "user")
  sessions!: Session[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
} 