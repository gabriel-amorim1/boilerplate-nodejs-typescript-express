import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMovieInterface } from '../interfaces/create';
import { MovieRequestGetAllInterface } from '../interfaces/list';
import CreateMovieService from '../services/create';
import ListMovieService from '../services/list';
import { createMovieSchema, listMovieSchema } from '../validators';

export const create = async (req: Request, res: Response): Promise<Response> => {
    const body = (await createMovieSchema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
    })) as CreateMovieInterface;

    const createMovieService = container.resolve(CreateMovieService);
    const movieCreated = await createMovieService.execute(body);

    return res.status(201).json(movieCreated);
};

export const list = async (req: Request, res: Response): Promise<Response> => {
    const query = (await listMovieSchema.validate(req.query, {
        stripUnknown: true,
        abortEarly: false,
    })) as MovieRequestGetAllInterface;

    const listMovieService = container.resolve(ListMovieService);
    const moviesListed = await listMovieService.execute(query);

    return res.json(moviesListed);
};
