import { Request, Response, NextFunction } from 'express';
export const tokenChecker = (req: Request, res: Response, next: NextFunction) => {
	next();
};
