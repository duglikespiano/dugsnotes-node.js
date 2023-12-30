import { Request, Response } from 'express';
import { Router } from 'express';
import { validateAccount } from '../middlewares/validation';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.redirect('/');
});

router.post('/', validateAccount, (req: Request, res: Response) => {
	try {
		res.render('validation', { result: req.app.locals.validationResult });
	} catch (error) {
		console.error(error);
	}
});

export default router;
