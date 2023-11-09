import dotenv from 'dotenv';
dotenv.config({ debug: true, path: 'src/6_sql/.env' });

export const databaseHost = process.env.DATABASE_HOST;
export const databasePort = process.env.DATABASE_PORT;
export const databaseUser = process.env.DATABASE_USER;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseName = process.env.DATABASE_NAME;
