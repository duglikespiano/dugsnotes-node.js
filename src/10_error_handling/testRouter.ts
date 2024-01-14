import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name, email } = req.body;
		if (!name || !email) {
			throw new Error('NOT ENOUGH INFORMATION');
		}
	} catch (error) {
		return next(error);
	}
});

export default router;
