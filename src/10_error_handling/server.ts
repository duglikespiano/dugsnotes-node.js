import express from 'express';
import http from 'http';
import router from './rootRotuer';
import { backendServerPortNumber } from './dotenv';
import { errorHanlder } from './middlewares/errorHandler';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(router);
app.use(errorHanlder);

server.listen(backendServerPortNumber, () => {
	console.log(`server is running on port no ${backendServerPortNumber}`);
});
