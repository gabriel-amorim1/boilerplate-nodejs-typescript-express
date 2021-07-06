import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import './database';
import routes from './routes';
import './containers';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3333, () => console.log('Server is running'));
