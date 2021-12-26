import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BlogOne } from "../../blog-one/entities/blog-one.entity";
import { Role } from "../enum";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  roles: Role[];

  @OneToMany(() => BlogOne, blogOne => blogOne.user)
  blogOnes: BlogOne[];
}
