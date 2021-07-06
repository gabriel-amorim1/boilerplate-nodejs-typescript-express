import { getRepository, Repository } from 'typeorm';
import { MovieEntity } from '../entities/movie';
import { CreateMovieInterface } from '../interfaces/create';
import { ListMovieInterface } from '../interfaces/list';

export default class MovieRepository {
    private ormRepository: Repository<MovieEntity>;

    constructor() {
        this.ormRepository = getRepository(MovieEntity);
    }

    public async createAndSave(movie: CreateMovieInterface): Promise<MovieEntity> {
        const movieToCreate = this.ormRepository.create(movie);

        return this.ormRepository.save(movieToCreate);
    }

    public async getAll(filter: ListMovieInterface): Promise<MovieEntity[]> {
        return this.ormRepository.find(filter);
    }
}
