import fs from 'fs';
import path from 'path';

const getProductsFromFile = (cb: any) => {
	const p = path.join(__dirname, '..', 'data', 'products.json');
	fs.readFile(p, (error, fileContent) => {
		if (error) {
			return cb([]);
		} else {
			cb(JSON.parse(fileContent.toString()));
		}
	});
};

export class Product {
	title: string;
	imageUrl: string;
	description: string;
	price: number;
	id: number;

	constructor(title: string, imageUrl: string, description: string, price: number, id: number) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
		this.id = Math.random();
	}

	save() {
		this.id = Math.random();
		const p = path.join(__dirname, '..', 'data', 'products.json');
		fs.readFile(p, (error, fileContent) => {
			let products: Product[] = [];
			if (!error) {
				products = JSON.parse(fileContent.toString());
			}
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (error) => {
				console.log(error);
			});
		});
	}
	static fetchAll(cb: any) {
		getProductsFromFile(cb);
	}

	static findById(id: any, cb: any) {
		getProductsFromFile((products: any) => {
			const product = products.find((p: any) => p.id === id);
			cb(product);
		});
	}
}
