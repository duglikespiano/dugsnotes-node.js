import { Router } from 'express';
const router = Router();

router.use('/', (req, res) => {
	res.json({ message: 'error!' });
	// res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

export default router;
