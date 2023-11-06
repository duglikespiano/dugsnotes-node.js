import { Router } from 'express';
import { getAddProduct, postAddProduct } from '../controllers/products';

const router = Router();

router.get('/add-product', getAddProduct);
router.post('/add-product', postAddProduct);

export default router;
