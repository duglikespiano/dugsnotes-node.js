import { Request, Response } from 'express';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

export const getProducts = (req: Request, res: Response) => {
	Product.fetchAll((products: any) => {
		res.render('shop/product-list', {
			prods: products,
			pageTitle: 'All Products',
			path: '/products',
		});
	});
};

export const getProduct = (req: Request, res: Response) => {
	const productId = req.params.productId;
	Product.findById(productId, (product: any) => {
		res.render('shop/product-detail', { product, pageTitle: product.title, path: '/products' });
	});
};

export const getIndex = (req: Request, res: Response) => {
	Product.fetchAll((products: any) => {
		res.render('shop/index', {
			products,
			pageTitle: 'Shop',
			path: '/',
		});
	});
};

export const postCart = (req: Request, res: Response) => {
	const productId = req.body.productId;
	Product.findById(productId, (product: any) => {
		Cart.addProduct(productId, product.price);
	});

	res.redirect('/cart');
};

export const getCart = (req: Request, res: Response) => {
	res.render('shop/cart', {
		path: '/cart',
		pageTitle: 'Your Cart',
	});
};

export const getOrders = (req: Request, res: Response) => {
	res.render('shop/orders', {
		path: '/orders',
		pageTitle: 'Your Orders',
	});
};

export const getCheckout = (req: Request, res: Response) => {
	res.render('shop/checkout', {
		path: '/checkout',
		pageTitle: 'Checkout',
	});
};
