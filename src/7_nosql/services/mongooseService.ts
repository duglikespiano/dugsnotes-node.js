import { mongooseSelectDao, mongoosePostDao, mongooseDeleteDao, mongoosePutDao } from '../models/mongooseDao';

export const mongooseSelectService = async () => {
	return await mongooseSelectDao();
};

export const mongoosePostService = async (data: { name: string; age: number }) => {
	return await mongoosePostDao(data);
};

export const mongoosePutService = async (from: { name: string; age: number }, to: { name: string; age: number }) => {
	return await mongoosePutDao(from, to);
};

export const mongooseDeleteService = async (data: { name: string; age: number }) => {
	return await mongooseDeleteDao(data);
};
