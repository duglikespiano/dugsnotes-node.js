import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get('/add-product', (req: Request, res: Response, next) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req: Request, res: Response, next) => {
	console.log(req.body);
	res.redirect('/');
});

export default router;
