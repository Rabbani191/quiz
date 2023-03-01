import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Choice } from './choice.entity';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ default: false})
    mandatory: boolean;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;

    @OneToMany(() => Choice, (choice) => choice.question, { cascade: true })
    choices: Choice[];
}
