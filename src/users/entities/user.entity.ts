import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BlogOne } from "../../blog-one/entities/blog-one.entity";
import { Role } from "../enum";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ApiProperty({ enum: ['Admin', 'User']})
  roles: Role[];

  @OneToMany(() => BlogOne, blogOne => blogOne.user)
  blogOnes: BlogOne[];
}
