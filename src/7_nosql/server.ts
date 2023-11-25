import express from 'express';
import http from 'http';
import router from './routers/mainRouter';
import { serverPort } from './env';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

server.listen(serverPort, () => {
	console.log(`Server is listening on port ${serverPort}`);
});
