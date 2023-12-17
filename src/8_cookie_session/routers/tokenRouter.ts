import { Router } from 'express';
import { tokenChecker } from '../middleware/tokenChecker';

const router = Router();

router.get('/:token', tokenChecker, (req, res) => {
	res.json({ message: `token is ${req.params.token}` });
});

export default router;
