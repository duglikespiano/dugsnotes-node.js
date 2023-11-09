import { Router } from 'express';
import {
	rawQuerySelectController,
	rawQueryPostController,
	rawQueryPutController,
	rawQueryDeleteController,
} from '../controllers/rawQueryController';

const router = Router();

router.get('/', rawQuerySelectController);
router.post('/', rawQueryPostController);
router.put('/', rawQueryPutController);
router.delete('/', rawQueryDeleteController);

export default router;
