import { Router } from 'express';
import {
	rawDatabaseSelectController,
	rawDatabasePostController,
	rawDatabasePutController,
	rawDatabaseDeleteController,
} from '../controllers/rawDatabaseController';

const router = Router();

router.get('/', rawDatabaseSelectController);
router.post('/', rawDatabasePostController);
router.put('/', rawDatabasePutController);
router.delete('/', rawDatabaseDeleteController);

export default router;
