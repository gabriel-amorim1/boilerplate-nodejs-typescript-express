import { inject, injectable } from 'tsyringe';
import { MovieEntity } from '../entities/movie';
import { CreateMovieInterface } from '../interfaces/create';
import MovieRepository from '../repositories';

@injectable()
class CreateMovieService {
    constructor(
        @inject('MovieRepository')
        private movieRepository: MovieRepository,
    ) {}

    public async execute(data: CreateMovieInterface): Promise<MovieEntity> {
        return this.movieRepository.createAndSave(data);
    }
}

export default CreateMovieService;
