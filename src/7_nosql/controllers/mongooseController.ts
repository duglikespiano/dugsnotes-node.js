import { Request, Response } from 'express';
import {
	mongooseSelectService,
	mongoosePostService,
	mongooseDeleteService,
	mongoosePutService,
} from '../services/mongooseService';

export const mongooseSelectController = async (req: Request, res: Response) => {
	const result = await mongooseSelectService();
	res.json({ data: result });
};

export const mongoosePostController = async (req: Request, res: Response) => {
	const result = await mongoosePostService(req.body);
	res.json({ data: result });
};

export const mongoosePutController = async (req: Request, res: Response) => {
	const { from, to } = req.body;
	const result = await mongoosePutService(from, to);
	res.json({ data: result });
};

export const mongooseDeleteController = async (req: Request, res: Response) => {
	const result = await mongooseDeleteService(req.body);
	res.json({ data: result });
};
