/* eslint-disable import/extensions */
import { Request, Response, Router } from 'express';
import movieRoutes from './modules/movie/movie.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Service 1.0.0');
});

router.use('/api/movie', movieRoutes);

export default router;
