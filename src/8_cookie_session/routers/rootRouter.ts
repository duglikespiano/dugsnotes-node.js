import { Router } from 'express';
import pingRouter from './pingRouter';
import loginRouter from './loginRouter';
import homeRouter from './homeRouter';
import testRouter from './testRouter';
import errorRouter from './errorRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/login', loginRouter);
router.use('/test', testRouter);
router.use('/', homeRouter);
router.use(errorRouter);

export default router;
