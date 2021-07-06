import { inject, injectable } from 'tsyringe';
import { MovieEntity } from '../entities/movie';
import { ListMovieInterface } from '../interfaces/list';
import MovieRepository from '../repositories';

@injectable()
class ListMovieService {
    constructor(
        @inject('MovieRepository')
        private movieRepository: MovieRepository,
    ) {}

    public async execute(filter: ListMovieInterface): Promise<MovieEntity[]> {
        return this.movieRepository.getAll(filter);
    }
}

export default ListMovieService;
