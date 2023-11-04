import { Router, Request, Response } from 'express';
import path from 'path';
import { products } from './admin';

const router = Router();

router.get('/', (req: Request, res: Response, next) => {
	res.render('shop', { products, pageTitle: 'My Shop', path: '/' });
});

export default router;
