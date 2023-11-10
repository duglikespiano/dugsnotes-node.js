import { Test } from '../database/sequelizeDatabase';

export const sequelizeSelectDao = async () => {
	return await Test.findAll();
	// return await Test.findByPk()
	// return await Test.findAll({where : {}});
};

export const sequelizePostDao = async (message: string) => {
	return await Test.create({ message });
};

export const sequelizePutDao = async (beforeMessage: string, afterMessage: string) => {
	return await Test.findAll({
		where: {
			message: beforeMessage,
		},
	}).then((data) => {
		return (data[0].dataValues.message = afterMessage);
	});
};

export const sequelizeDeleteDao = async (message: string) => {
	return await Test.findAll({
		where: {
			message: message,
		},
	}).then(() => {
		return;
	});
};
