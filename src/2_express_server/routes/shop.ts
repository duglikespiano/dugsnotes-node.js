import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req: Request, res: Response, next) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

export default router;
