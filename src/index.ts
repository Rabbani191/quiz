import { AppDataSource } from "./data-source";
import * as express from 'express';
import {Application, Request, Response} from "express";
import { QuizController } from "./controller/quiz.controller";;
import {ValidationMiddleware} from "./middleware/validation.middleware";
import {CreateQuizSchema} from "./dto/quiz.dto";

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized")
    })
    .catch((err) => {
        console.error("Error during data source initialization:", err)
    });

const app: Application = express();
app.use(express.json());

const quizController = new QuizController();

app.get('/', (req: Request, res: Response) => {
    res.json({ "hello": "world"})
});

app.post('/api/quiz', ValidationMiddleware(CreateQuizSchema), async (req: Request, res:Response) => await quizController.createQuiz(req, res))
app.get('/api/quiz', async (req: Request, res: Response) => await quizController.getQuizzes(req, res));
app.get('/api/quiz/:id', async (req: Request, res: Response) => await quizController.getQuiz(req, res))

app.listen(3000, () => console.log('Server started on port 3000'))


