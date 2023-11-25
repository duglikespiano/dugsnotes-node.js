import { databaseCollection } from '../database/database';

export const rawDatabaseSelectDao = async () => {
	return databaseCollection.find({}).toArray();
};

export const rawDatabasePostDao = async (data: { name: string; age: number }) => {
	return await databaseCollection.insertOne(data);
};

export const rawDatabasePutDao = async (from: { name: string; age: number }, to: { name: string; age: number }) => {
	return await databaseCollection.updateOne(from, to);
};

export const rawDatabaseDeleteDao = async (data: { name: string; age: number }) => {
	return await databaseCollection.deleteOne(data);
};
