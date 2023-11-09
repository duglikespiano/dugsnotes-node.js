import { Router } from 'express';
import { getIndex, getCart, getProducts, getProduct, getOrders, postCart } from '../controllers/shop';

const router = Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/products/:productId', getProduct);
router.get('/cart', getCart);
router.post('/cart', postCart);
router.get('/orders', getOrders);

export default router;
