import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class BlogOne {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  content: string;

  @ManyToOne(() => User, user => user.blogOnes)
  user: User;
}
