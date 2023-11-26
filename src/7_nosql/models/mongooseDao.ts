import { Test } from '../database/database';

export const mongooseSelectDao = async () => {
	return await Test.find({});
};

export const mongoosePostDao = async (data: { name: string; age: number }) => {
	return await Test.create(data);
};

export const mongoosePutDao = async (from: { name: string; age: number }, to: { name: string; age: number }) => {
	return await Test.updateOne(from, to);
};

export const mongooseDeleteDao = async (data: { name: string; age: number }) => {
	return await Test.deleteOne(data);
};
