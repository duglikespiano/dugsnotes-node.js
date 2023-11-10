import { Sequelize, DataTypes } from 'sequelize';
import { databaseHost } from '../env';

export const sequelize = new Sequelize('sequelizequery', 'root', '', { dialect: 'mariadb', host: databaseHost, logging: false });

export const Test = sequelize.define('test', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	message: {
		type: DataTypes.STRING(50),
		unique: true,
		allowNull: false,
	},
});

sequelize.sync().catch((error) => console.error(error));
