
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Blog } from "../../blogs/entities/blog.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];
}