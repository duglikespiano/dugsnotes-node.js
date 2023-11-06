import { Request, Response } from 'express';
import { Product } from '../models/product';

export const getAddProduct = (req: Request, res: Response) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
};

export const postAddProduct = (req: Request, res: Response) => {
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};

export const getProducts = (req: Request, res: Response) => {
	Product.fetchAll((products: Product[]) => {
		res.render('shop', {
			products,
			pageTitle: 'My Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true,
		});
	});
};
