import { Router } from 'express';
import pingRouter from './pingRouter';
import rawQueryRouter from './rawQueryRouter';
import sequelizeRouter from './sequelizeRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/rawquery', rawQueryRouter);
router.use('/sequelize', sequelizeRouter);

export default router;
