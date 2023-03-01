import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Choice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ default: false })
    isCorrect: boolean;

    @ManyToOne(() => Question, (question) => question.choices)
    question: Question;
}
