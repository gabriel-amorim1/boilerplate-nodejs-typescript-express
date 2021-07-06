import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMovieInterface } from '../interfaces/create';
import CreateMovieService from '../services/create';
import { createMovieSchema } from '../validators';

export const create = async (req: Request, res: Response): Promise<Response> => {
    const body = (await createMovieSchema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
    })) as CreateMovieInterface;

    const createMovieService = container.resolve(CreateMovieService);
    const movieCreated = await createMovieService.execute(body);

    return res.status(201).json(movieCreated);
};
