import { IChoice } from "./choices.interface";

export interface IQuestion {
    id?: number;
    text: string;
    mandatory?: boolean;
    quizId?: number;
    choices?: IChoice[];
}
