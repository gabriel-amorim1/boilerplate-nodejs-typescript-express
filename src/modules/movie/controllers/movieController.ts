import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMovieInterface } from '../interfaces/movieInterface';
import MovieService from '../services/movieService';
import { createMovieSchema } from '../validators';

export const create = async (req: Request, res: Response): Promise<Response> => {
    try {
        const body = (await createMovieSchema.validate(req.body, {
            stripUnknown: true,
            abortEarly: false
        })) as CreateMovieInterface;

        const movieService = container.resolve(MovieService);
        const movieCreated = await movieService.create(body);

        return res.status(201).json(movieCreated);
    } catch (error) {
        return res.status(400).json({ errors: error.errors })
    }
}
