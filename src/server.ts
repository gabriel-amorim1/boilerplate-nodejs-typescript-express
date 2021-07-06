import 'reflect-metadata';
import app from './app';

import './database';
import './containers';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Service running on port ${PORT}`);
    });
}

startServer();
