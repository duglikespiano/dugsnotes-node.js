import { Request, Response } from 'express';
import {
	sequelizeSelectService,
	sequelizePostService,
	sequelizePutService,
	sequelizeDeleteService,
} from '../services/sequelizeService';

export const sequelizeSelectController = async (req: Request, res: Response) => {
	const result = await sequelizeSelectService();
	res.json({ result });
};

export const sequelizePostController = async (req: Request, res: Response) => {
	const { message } = req.body;
	await sequelizePostService(message);
	res.json({ message: 'successfully added' });
};

export const sequelizePutController = async (req: Request, res: Response) => {
	const { beforeMessage, afterMessage } = req.body;
	await sequelizePutService(beforeMessage, afterMessage);
	res.json({ message: 'successfully edited' });
};

export const sequelizeDeleteController = async (req: Request, res: Response) => {
	const { message } = req.body;
	await sequelizeDeleteService(message);
	res.json({ message: 'successfully deleted' });
};
