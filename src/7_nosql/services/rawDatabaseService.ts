import { rawDatabaseSelectDao, rawDatabasePostDao, rawDatabaseDeleteDao, rawDatabasePutDao } from '../models/rawDatabaseDao';

export const rawDatabaseSelectService = async () => {
	return await rawDatabaseSelectDao();
};

export const rawDatabasePostService = async (data: { name: string; age: number }) => {
	return await rawDatabasePostDao(data);
};

export const rawDatabasePutService = async (from: { name: string; age: number }, to: { name: string; age: number }) => {
	return await rawDatabasePutDao(from, to);
};

export const rawDatabaseDeleteService = async (data: { name: string; age: number }) => {
	return await rawDatabaseDeleteDao(data);
};
