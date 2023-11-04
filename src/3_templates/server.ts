import express, { Request, Response } from 'express';
import path from 'path';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req: Request, res: Response, next) => {
	res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(8001);
