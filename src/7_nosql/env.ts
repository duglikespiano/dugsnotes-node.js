import dotenv from 'dotenv';
dotenv.config({ debug: true, path: 'src/7_nosql/.env' });

export const serverPort = process.env.BACKEND_PORT;
export const databaseUser = process.env.DATABASE_USER;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseDatabaseName = process.env.DATABASE_DATABASE_NAME;
export const databaseCollectionName = process.env.DATABASE_COLLECTION_NAME as string;
export const databaseURI = `mongodb+srv://${databaseUser}:${databasePassword}@${databaseDatabaseName}.2xx3w4n.mongodb.net/?retryWrites=true&w=majority`;
