import { Router, Request, Response } from 'express';
import { sessionAddController } from '../controllers/sessionController';
import { cookieChecker } from '../middleware/cookieChecker';

const router = Router();

router.get('/', cookieChecker, (req: Request, res: Response) => {
	const id = req.cookies['dugshome-id'];
	res.render('loggedInPage', {
		pageTitle: 'loggedInPage',
		id,
	});
});

router.post('/', sessionAddController);

export default router;
