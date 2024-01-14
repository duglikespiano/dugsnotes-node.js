import { Router } from 'express';
import pingRouter from './pingRouter';
import testRouter from './testRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/test', testRouter);

export default router;
