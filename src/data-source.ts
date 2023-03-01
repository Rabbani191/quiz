import "reflect-metadata"
import { DataSource } from "typeorm"
import { Quiz } from "./entity/quiz.entity";
import { Question } from "./entity/question.entity";
import { Choice } from "./entity/choice.entity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "quiz.sqlite",
    synchronize: true,
    logging: true,
    entities: [Choice, Question, Quiz ],
    migrations: [],
    subscribers: [],
})
