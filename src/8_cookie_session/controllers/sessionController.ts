import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

export const sessionAddController = async (req: Request, res: Response) => {
	const { id, password } = req.body;
	try {
		const dataInRootFolders = await checkDataInRootFolder();
		if (!dataInRootFolders.includes('session')) {
			await makeSessionFolder();
			await sessionAddController(req, res);
			return;
		} else {
			const dataInSessionFolders = await checkDataInSessionFolder();
			if (!dataInSessionFolders.includes('session.txt')) {
				await makeSessionFile();
				await sessionAddController(req, res);
				return;
			} else {
				const sessionId = await appendDataInSessionFile(id, password);
				res.cookie('dugshome-sessionid', sessionId);
				res.cookie('dugshome-id', id);
				res.redirect('/login');
			}
		}
	} catch (error) {
		console.log(error);
	}
};

const checkDataInRootFolder = async () => {
	const dir = await fs.opendir('./src/8_cookie_session');
	const folderArray: string[] = [];
	for await (const dirent of dir) folderArray.push(dirent.name);
	return folderArray;
};

const checkDataInSessionFolder = async () => {
	const dir = await fs.opendir('./src/8_cookie_session/session');
	const folderArray: string[] = [];
	for await (const dirent of dir) folderArray.push(dirent.name);
	return folderArray;
};

const makeSessionFolder = async () => {
	fs.mkdir(path.join('./src/8_cookie_session', 'session')).catch(console.log);
};

const makeSessionFile = async () => {
	fs.writeFile('./src/8_cookie_session/session/session.txt', '').catch(console.log);
};

const appendDataInSessionFile = async (id: string, password: string) => {
	let sessionFileData: sessionFileDataType = await fs.readFile('./src/8_cookie_session/session/session.txt', 'utf8');
	if (sessionFileData === '') {
		sessionFileData = [{ id, password, sessionId: new Date().toString() + Math.random(), lastLogIn: new Date().toISOString() }];
		fs.writeFile('./src/8_cookie_session/session/session.txt', JSON.stringify(sessionFileData)).catch(console.log);
	} else {
		const sessionFileDataIntoJSON = JSON.parse(sessionFileData);
		const sessionId = new Date().toString() + Math.random();
		const lastLogIn = new Date().toISOString();

		for (let i = 0; i < sessionFileDataIntoJSON.length; i++) {
			if (sessionFileDataIntoJSON[i].id === id) {
				sessionFileDataIntoJSON[i].lastLogIn = new Date().toISOString();
				fs.writeFile('./src/8_cookie_session/session/session.txt', JSON.stringify(sessionFileDataIntoJSON)).catch(console.log);
				return;
			} else {
				sessionFileDataIntoJSON.push({ id, password, sessionId, lastLogIn });
				fs.writeFile('./src/8_cookie_session/session/session.txt', JSON.stringify(sessionFileDataIntoJSON)).catch(console.log);
			}
		}
		return sessionId;
	}
};

type sessionFileDataType = { id: string; password: string; sessionId: string; lastLogIn: string }[] | string | [];
