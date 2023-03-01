import {AppDataSource} from "../data-source";
import {Quiz} from "../entity/quiz.entity";
import {IQuiz} from "../interfaces";

export class QuizService {
    async create(data: IQuiz): Promise<any> {
        const quizRepo = AppDataSource.getRepository(Quiz);
       return  await quizRepo.save({...data});
    }

    async get(): Promise<any> {
        const quizRepo = AppDataSource.getRepository(Quiz);
        return await quizRepo.find({
            relations: ['questions', 'questions.choices']
        });
    }

    async getSingleQuiz(id: number): Promise<any> {
        const quizRepo = AppDataSource.getRepository(Quiz);
        return  await quizRepo.findOne({
            where: {
                id
            },
            relations: ['questions', 'questions.choices']
        })
    }

}
