import * as Joi from "joi";


export const CreateQuizSchema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    questions: Joi.array().items(Joi.object({
        text: Joi.string().required(),
        mandatory: Joi.boolean().required(),
        choices: Joi.array().required().items(Joi.object({
            text: Joi.string().required(),
            isCorrect: Joi.boolean().required()
        }))
    }))
})
