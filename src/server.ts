import 'reflect-metadata';
import app from './app';

import { connection } from './database';
import './containers';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connection;

    app.listen(PORT, () => {
        console.log(`Service running on port ${PORT}`);
    });
}

startServer();
