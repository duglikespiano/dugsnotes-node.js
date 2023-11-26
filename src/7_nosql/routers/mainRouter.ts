import { Router } from 'express';
import pingRouter from './pingRouter';
import mongodbRouter from './mongodbRouter';
import mongooseRouter from './mongooseRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/mongodb', mongodbRouter);
router.use('/mongoose', mongooseRouter);

export default router;
