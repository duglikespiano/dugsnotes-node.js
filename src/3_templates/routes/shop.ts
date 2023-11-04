import { Router, Request, Response } from 'express';
import path from 'path';
import { products } from './admin';

const router = Router();

router.get('/', (req: Request, res: Response, next) => {
	res.render('shop', {
		products,
		pageTitle: 'My Shop',
		path: '/',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true,
	});
});

export default router;
