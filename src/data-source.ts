import "reflect-metadata"
import { DataSource } from "typeorm"
import { Quiz } from "./entity/quiz.entity";
import { Question } from "./entity/question.entity";
import { Choice } from "./entity/choice.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Choice, Question, Quiz ],
    migrations: [],
    subscribers: [],
})
