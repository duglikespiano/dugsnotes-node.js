import { Router } from 'express';
import {
	sequelizeSelectController,
	sequelizePostController,
	sequelizePutController,
	sequelizeDeleteController,
} from '../controllers/sequelizeController';

const router = Router();

router.get('/', sequelizeSelectController);
router.post('/', sequelizePostController);
router.put('/', sequelizePutController);
router.delete('/', sequelizeDeleteController);

export default router;
