import { Request, Response, NextFunction } from 'express';

export const cookieChecker = (req: Request, res: Response, next: NextFunction) => {
	try {
		if (JSON.stringify(req.cookies) === '{}') {
			res.redirect('/');
			throw new Error('no cookie');
		} else {
			return next();
		}
	} catch (error) {
		console.error(error);
	}
};
