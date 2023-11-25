import { MongoClient } from 'mongodb';
import { databaseURI, databaseDatabaseName, databaseCollectionName } from '../env';

const client = new MongoClient(databaseURI);
const database = client.db(databaseDatabaseName);
export const databaseCollection = database.collection(databaseCollectionName);
