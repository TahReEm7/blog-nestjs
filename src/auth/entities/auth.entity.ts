import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: "email",
        type: "varchar",
        length: 255,
        nullable: false,
    })
    email: string;
}
