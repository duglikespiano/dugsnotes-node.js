import express, { Request, Response } from 'express';
import path from 'path';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req: Request, res: Response, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(8001);
