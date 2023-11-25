import { Router } from 'express';
import pingRouter from './pingRouter';
import mongodbRouter from './mongodbRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/mongodb', mongodbRouter);

export default router;
