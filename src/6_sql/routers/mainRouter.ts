import { Router } from 'express';
import pingRouter from './pingRouter';
import rawQueryRouter from './rawQueryRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/rawquery', rawQueryRouter);

export default router;
