import { getRepository, Repository } from 'typeorm';
import { OptionsTypeOrmGetAll } from '../../../utils/interfaces/pagination';
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

    public async getAll(
        options: OptionsTypeOrmGetAll,
    ): Promise<{ data: MovieEntity[]; count: number }> {
        const [data, count] = await this.ormRepository.findAndCount(options);

        return { data, count };
    }
}
