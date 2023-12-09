import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	res.json({ mesasge: 'pong!' });
});

export default router;
