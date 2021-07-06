import { getRepository, Repository } from 'typeorm';
import { MovieEntity } from '../entities/movie';
import { CreateMovieInterface } from '../interfaces/create';

export default class MovieRepository {
    private ormRepository: Repository<MovieEntity>;

    constructor() {
        this.ormRepository = getRepository(MovieEntity);
    }

    public async createAndSave(movie: CreateMovieInterface): Promise<MovieEntity> {
        const movieToCreate = this.ormRepository.create(movie);

        return this.ormRepository.save(movieToCreate);
    }
}
