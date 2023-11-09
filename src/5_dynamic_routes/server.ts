import express from 'express';
import path from 'path';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import { get404 } from './controllers/error';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use(get404);

app.listen(8001);
