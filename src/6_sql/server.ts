import express from 'express';
import http from 'http';
import router from './routers/mainRouter';

const app = express();
const portNumber = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const server = http.createServer(app);

server.listen(portNumber, () => {
	console.log(`server is on port ${portNumber}`);
});
