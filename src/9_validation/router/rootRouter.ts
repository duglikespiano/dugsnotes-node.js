import { Router } from 'express';
import pingpongRouter from './pingpongRouter';
import validationRouter from './validationRouter';

const router = Router();
router.use('/ping', pingpongRouter);
router.use('/validation', validationRouter);
router.get('/', (req, res) => {
	res.clearCookie('validation-result');
	res.render('index');
});

export default router;
