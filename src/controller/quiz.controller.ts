import { Request, Response } from "express";
import { IQuiz } from "../interfaces";
import { QuizService } from "../services/quiz.service";;
import {StatusCodes} from "http-status-codes";


export class QuizController {
    private quizService = new QuizService();
    async createQuiz(req: Request, res: Response): Promise<any> {
        try {
            const data: IQuiz = req.body;
            const result = await this.quizService.create(data);
            return res.status(StatusCodes.OK).json({ success: true, error: false, data: result})
        } catch (err) {
            console.log('error')
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: err, data: null})
        }
    }

    async getQuizzes(req: Request, res: Response): Promise<any> {
        try {
            const result = await this.quizService.get();
            return res.status(StatusCodes.OK).json({ success: true, error: false, data: result})
        }catch (err) {
            console.error('error')
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: err, data: null})
        }
    }

    async getQuiz(req: Request, res: Response): Promise<any> {
        try {
            const id = Number(req.params.id);
            const result = await this.quizService.getSingleQuiz(id);
            if (!result) {
                return res.status(StatusCodes.NOT_FOUND).json({ success: true, error: false, data: { message: `Quiz with id not found`}});
            }
            return res.status(StatusCodes.OK).json({ success: true, error: false, data: result})
        }catch (err) {
            console.error('error')
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: err, data: null})
        }
    }
}
