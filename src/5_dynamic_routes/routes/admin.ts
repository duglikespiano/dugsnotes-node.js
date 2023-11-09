import { Router } from 'express';
import { getAddProduct, getEditProduct, getProducts, postAddProduct } from '../controllers/admin';

const router = Router();

router.get('/add-product', getAddProduct);
router.post('/add-product', postAddProduct);

router.get('/edit-product/:productId', getEditProduct);
router.post('/edit-product');
router.get('/products', getProducts);

export default router;
