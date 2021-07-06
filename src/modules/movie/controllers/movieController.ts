import { Request, Response } from 'express';
import { container } from 'tsyringe';
import MovieService from '../services/movieService';

export const create = async (req: Request, res: Response): Promise<Response> => {
    const movieService = container.resolve(MovieService);

    const movieCreated = await movieService.create(req.body);

    return res.status(201).json(movieCreated);
}
