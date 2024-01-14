import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export const errorHanlder = (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	console.error(error);
};
