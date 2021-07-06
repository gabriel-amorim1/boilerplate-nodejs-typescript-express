import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
export class MovieEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    director: string;

    @Column()
    name: string;

    @Column()
    genre: string;

    @Column()
    actors: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
