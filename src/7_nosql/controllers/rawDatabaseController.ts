import { Request, Response } from 'express';
import {
	rawDatabaseSelectService,
	rawDatabasePostService,
	rawDatabaseDeleteService,
	rawDatabasePutService,
} from '../services/rawDatabaseService';

export const rawDatabaseSelectController = async (req: Request, res: Response) => {
	const result = await rawDatabaseSelectService();
	res.json({ data: result });
};

export const rawDatabasePostController = async (req: Request, res: Response) => {
	const result = await rawDatabasePostService(req.body);
	res.json({ data: result });
};

export const rawDatabasePutController = async (req: Request, res: Response) => {
	const { from, to } = req.body;
	const result = await rawDatabasePutService(from, to);
	res.json({ data: result });
};

export const rawDatabaseDeleteController = async (req: Request, res: Response) => {
	const result = await rawDatabaseDeleteService(req.body);
	res.json({ data: result });
};
