import { getRepository, Repository } from 'typeorm';
import { MovieEntity } from '../entities/movie.entity';
import { CreateMovie } from '../interfaces/movieInteface';

export default class MovieRepository {
    private ormRepository: Repository<MovieEntity>;

    constructor() {
        this.ormRepository = getRepository(MovieEntity);
    }

    public async createAndSave(
        movie: CreateMovie,
    ): Promise<MovieEntity> {
        const movieToCreate = this.ormRepository.create(movie);

        return this.ormRepository.save(movieToCreate);
    }
}
