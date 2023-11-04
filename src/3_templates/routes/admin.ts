import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();
export const products: {
	title: string;
}[] = [];

router.get('/add-product', (req: Request, res: Response, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
});

router.post('/add-product', (req: Request, res: Response, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
});

export default router;
