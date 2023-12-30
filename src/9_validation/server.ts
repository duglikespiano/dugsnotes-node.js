import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './router/rootRouter';
import { backendServerPort } from './dotnev';

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(router);

server.listen(backendServerPort, () => {
	console.log(`server is listening to port ${backendServerPort}`);
});
