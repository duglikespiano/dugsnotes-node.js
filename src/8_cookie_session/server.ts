import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';
import router from './routers/rootRouter';
import path from 'path';

const app = express();
const server = http.createServer(app);
const backendServerPort = 8001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(router);

server.listen(backendServerPort, () => {
	console.log(`server is listening on port ${backendServerPort}!`);
});
