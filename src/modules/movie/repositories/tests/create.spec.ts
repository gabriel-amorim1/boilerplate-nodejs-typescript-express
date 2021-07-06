import MovieRepository from '..';
import { connection } from '../../../../database';

describe('Create Movie Repository Context', () => {
    let movieRepository: MovieRepository;

    beforeAll(async () => {
        await connection;
        movieRepository = new MovieRepository();
    });

    it('should be able to create a new movie', async () => {
        const movieBuild = {
            director: 'Leigh Janiak',
            name: 'Fear Street 2',
            genre: 'Horror',
            actors: 'Sadie Sink, Emily Rudd, Ryan Simpkins',
        };

        const createdMovie = await movieRepository.createAndSave(movieBuild);

        expect(createdMovie.id).not.toBeUndefined();
        expect(createdMovie.created_at).not.toBeUndefined();
        expect(createdMovie.updated_at).not.toBeUndefined();
        expect(createdMovie.director).toBe(movieBuild.director);
        expect(createdMovie.name).toBe(movieBuild.name);
        expect(createdMovie.genre).toBe(movieBuild.genre);
        expect(createdMovie.actors).toBe(movieBuild.actors);
    });
});
