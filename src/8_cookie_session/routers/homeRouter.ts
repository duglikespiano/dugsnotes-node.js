import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	res.clearCookie('dugshome-sessionid');
	res.clearCookie('dugshome-id');
	res.render('home', {
		pageTitle: 'home',
	});
});

export default router;
