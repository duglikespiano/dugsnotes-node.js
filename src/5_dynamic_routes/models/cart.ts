import fs from 'fs';
import path from 'path';

const p = path.join(__dirname, '..', 'data', 'cart.json');

export class Cart {
	static addProduct(id: number, productPrice: number) {
		fs.readFile(p, (error, fileContent) => {
			let cart: { products: any[]; totalPrice: number } = { products: [], totalPrice: 0 };
			if (!error) {
				cart = JSON.parse(fileContent.toString());
			}
			const existingProductIndex: any = cart.products.findIndex((product: any) => product.id === id);
			const existingProduct = cart.products[existingProductIndex];
			let updatedProduct;
			if (existingProduct) {
				updatedProduct = { ...existingProduct };
				updatedProduct.quantity = updatedProduct.quantity + 1;
				cart.products = [...cart.products];
				cart.products[existingProductIndex] = updatedProduct;
			} else {
				updatedProduct = { id, quantity: 1 };
				cart.products = [...cart.products, updatedProduct];
			}
			cart.totalPrice = cart.totalPrice + +productPrice;
			fs.writeFile(p, JSON.stringify(cart), (error) => {
				if (error) {
					console.log(error);
				}
			});
		});
	}
}
