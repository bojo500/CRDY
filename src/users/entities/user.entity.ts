import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BlogOne } from "../../blog-one/entities/blog-one.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;


  @OneToMany(() => BlogOne, blogOne => blogOne.user)
  blogOnes: BlogOne[];
}
