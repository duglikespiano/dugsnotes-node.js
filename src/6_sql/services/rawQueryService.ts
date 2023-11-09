import { rawQuerySelectDao, rawQueryPostDao, rawQueryPutDao, rawQueryDeleteDao } from '../models/rawQueryDao';

export const rawQuerySelectService = async () => {
	return await rawQuerySelectDao();
};

export const rawQueryPostService = async (name: string) => {
	return await rawQueryPostDao(name);
};

export const rawQueryPutService = async (beforeName: string, afterName: string) => {
	return await rawQueryPutDao(beforeName, afterName);
};

export const rawQueryDeleteService = async (name: string) => {
	return await rawQueryDeleteDao(name);
};
