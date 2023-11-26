import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import { databaseURI, databaseDatabaseName, databaseCollectionName } from '../env';

//MongoDB
const client = new MongoClient(databaseURI);
const database = client.db(databaseDatabaseName);
export const databaseCollection = database.collection(databaseCollectionName);

//Mongoose
mongoose.connect(databaseURI);
const schema = new mongoose.Schema({ name: String, age: Number });
export const Test = mongoose.model('test', schema);
