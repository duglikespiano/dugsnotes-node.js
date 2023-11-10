import { myDatabase } from '../database/rawDatabase';

export const rawQuerySelectDao = () => {
	return myDatabase.query(`SELECT * FROM test`);
};

export const rawQueryPostDao = (name: string) => {
	return myDatabase.query(`INSERT INTO test (name) VALUES (?)`, [name]);
};

export const rawQueryPutDao = (beforeName: string, afterName: string) => {
	return myDatabase.query(`UPDATE test SET name = (?) WHERE name = (?)`, [afterName, beforeName]);
};

export const rawQueryDeleteDao = (name: string) => {
	return myDatabase.query(`DELETE FROM test WHERE name = (?)`, [name]);
};
