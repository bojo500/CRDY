import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BlogOne {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  content: string;
}
