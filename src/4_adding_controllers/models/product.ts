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
	constructor(title: string) {
		this.title = title;
	}
	save() {
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
}
