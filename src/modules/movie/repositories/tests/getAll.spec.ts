import MovieRepository from '..';
import { connection } from '../../../../database';
import { MovieEntity } from '../../entities/movie';

describe('Get All Movie Repository', () => {
    let movieRepository: MovieRepository;

    let movie: MovieEntity;

    beforeAll(async () => {
        await connection;
        movieRepository = new MovieRepository();

        const movieBuild = {
            director: 'Leigh Janiak',
            name: 'Fear Street 2',
            genre: 'Horror',
            actors: 'Sadie Sink, Emily Rudd, Ryan Simpkins',
        };

        movie = await movieRepository.createAndSave(movieBuild);
    });

    it('should be able to list and count movies', async () => {
        const { data, count } = await movieRepository.getAll(<any>{});

        expect(data.filter(item => item.id === movie.id)[0]).toEqual(movie);
        expect(count).toBeGreaterThanOrEqual(1);
    });
});
