import { Request, Response } from 'express';
import { Product } from '../models/product';

export const getAddProduct = (req: Request, res: Response) => {
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
	});
};

export const postAddProduct = (req: Request, res: Response) => {
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const price = req.body.price;
	const description = req.body.description;
	const id = Math.random();
	const product = new Product(title, imageUrl, description, price, id);
	product.save();
	res.redirect('/');
};

export const getEditProduct = (req: Request, res: Response) => {
	const editMode = req.query.edit;
	if (!editMode) {
		return res.redirect('/');
	}
	const productId = req.params.productId;
	Product.findById(productId, (product: any) => {
		if (!product) {
			return res.redirect('/');
		} else {
			res.render('admin/edit-product', {
				pageTitle: 'Edit Product',
				path: '/admin/edit-product',
				editing: editMode,
				product,
			});
		}
	});
};

export const postEditProduct = (req: Request, res: Response) => {};

export const getProducts = (req: Request, res: Response) => {
	Product.fetchAll((products: Product[]) => {
		res.render('admin/products', {
			prods: products,
			pageTitle: 'Admin Products',
			path: '/admin/products',
		});
	});
};
