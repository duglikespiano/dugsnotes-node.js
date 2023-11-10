import { sequelizeSelectDao, sequelizePostDao, sequelizePutDao, sequelizeDeleteDao } from '../models/sequelizeDao';

export const sequelizeSelectService = async () => {
	return await sequelizeSelectDao();
};

export const sequelizePostService = async (message: string) => {
	return await sequelizePostDao(message);
};

export const sequelizePutService = async (beforeMessage: string, afterMessage: string) => {
	return await sequelizePutDao(beforeMessage, afterMessage);
};

export const sequelizeDeleteService = async (message: string) => {
	return await sequelizeDeleteDao(message);
};
