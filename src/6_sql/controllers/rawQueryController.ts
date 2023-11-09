import { Request, Response } from 'express';
import {
	rawQuerySelectService,
	rawQueryPostService,
	rawQueryPutService,
	rawQueryDeleteService,
} from '../services/rawQueryService';

export const rawQuerySelectController = async (req: Request, res: Response) => {
	const result = await rawQuerySelectService();
	res.json({ result });
};

export const rawQueryPostController = async (req: Request, res: Response) => {
	const { name } = req.body;
	await rawQueryPostService(name);
	res.json({ message: 'successfully added' });
};

export const rawQueryPutController = async (req: Request, res: Response) => {
	const { beforeName, afterName } = req.body;
	await rawQueryPutService(beforeName, afterName);
	res.json({ message: 'successfully edited' });
};

export const rawQueryDeleteController = async (req: Request, res: Response) => {
	const { name } = req.body;
	await rawQueryDeleteService(name);
	res.json({ message: 'successfully deleted' });
};
