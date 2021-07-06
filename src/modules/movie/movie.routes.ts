import { Router } from 'express';
import * as MovieController from './controllers/movieController';

const router = Router();

router.post(
    '/',
    MovieController.create,
);

export default router;
