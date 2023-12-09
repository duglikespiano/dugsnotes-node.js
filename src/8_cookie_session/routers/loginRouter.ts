import { Router } from 'express';
import { sessionAddController } from '../controllers/sessionController';

const router = Router();

router.get('/', (req, res) => {
	const id = req.cookies['dugshome-id'];
	if (id) {
		res.render('loggedInPage', {
			pageTitle: 'loggedInPage',
			id,
		});
	} else {
		res.redirect('/');
	}
});

router.post('/', sessionAddController);

export default router;
