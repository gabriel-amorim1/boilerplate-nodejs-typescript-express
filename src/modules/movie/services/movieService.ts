import { inject, injectable } from 'tsyringe';
import { MovieEntity } from '../entities/movie';
import { CreateMovieInterface } from '../interfaces/movieInterface';
import MovieRepository from '../repositories/movieRepository';

@injectable()
class MovieService {
    constructor(
        @inject('MovieRepository')
        private movieRepository: MovieRepository,
    ) {}

    public async create(data: CreateMovieInterface): Promise<MovieEntity> {
        return this.movieRepository.createAndSave(data);
    }
}

export default MovieService;
