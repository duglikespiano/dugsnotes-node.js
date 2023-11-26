import { Router } from 'express';
import {
	mongooseSelectController,
	mongoosePostController,
	mongoosePutController,
	mongooseDeleteController,
} from '../controllers/mongooseController';

const router = Router();

router.get('/', mongooseSelectController);
router.post('/', mongoosePostController);
router.put('/', mongoosePutController);
router.delete('/', mongooseDeleteController);

export default router;
