
import {NextFunction, Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

export const ValidationMiddleware = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({success: false, error: error.details[0].message, data: null})
    } else {
        next();
    }
}
