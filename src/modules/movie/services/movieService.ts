import { inject, injectable } from 'tsyringe';
import { MovieEntity } from '../entities/movie.entity';
import { CreateMovie } from '../interfaces/movieInteface';
import MovieRepository from '../repositories/movieRepository';

@injectable()
class MovieService {
    constructor(
        @inject('MovieRepository')
        private movieRepository: MovieRepository,
    ) {}

    public async create(data: CreateMovie) {
        return this.movieRepository.createAndSave(data);
    }
}

export default MovieService;
