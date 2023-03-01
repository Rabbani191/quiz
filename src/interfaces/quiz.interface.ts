import {IQuestion} from "./question.interface";

export interface IQuiz {
    id?: number;
    title: string;
    description: string;
    questions?: IQuestion[];
}
