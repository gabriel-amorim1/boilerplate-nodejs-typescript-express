import { inject, injectable } from 'tsyringe';
import { buildFilterGetAll } from '../../../utils/dataBase/filters';
import { buildPaginatedGetAll } from '../../../utils/dataBase/pagination';
import { MovieEntity } from '../entities/movie';
import { MovieRequestGetAllInterface } from '../interfaces/list';
import MovieRepository from '../repositories';

@injectable()
class ListMovieService {
    constructor(
        @inject('MovieRepository')
        private movieRepository: MovieRepository,
    ) {}

    public async execute(
        queryParams: MovieRequestGetAllInterface,
    ): Promise<{ data: MovieEntity[]; count: number }> {
        const options = buildFilterGetAll(queryParams);

        const movies = await this.movieRepository.getAll(options);

        return buildPaginatedGetAll(queryParams, movies);
    }
}

export default ListMovieService;
