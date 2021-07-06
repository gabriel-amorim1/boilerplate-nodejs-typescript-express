import sinon from 'sinon';
import { container } from 'tsyringe';
import { v4 } from 'uuid';
import MovieRepository from '../../repositories';
import CreateMovieService from '../create';

describe('Create Movie Service context', () => {
    let movieRepositorySpy: sinon.SinonStubbedInstance<MovieRepository>;
    let createMovieService: CreateMovieService;

    beforeEach(() => {
        sinon.restore();
        movieRepositorySpy = sinon.createStubInstance(MovieRepository);
        createMovieService = new CreateMovieService(<any>movieRepositorySpy);
    });

    it('should create a new movie and call create movie repository function', async () => {
        const movieData = {
            director: 'Leigh Janiak',
            name: 'Fear Street 2',
            genre: 'Horror',
            actors: 'Sadie Sink, Emily Rudd, Ryan Simpkins',
        };

        const repositoryRes = {
            ...movieData,
            id: v4(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        movieRepositorySpy.createAndSave.resolves(repositoryRes);
        sinon.stub(container, 'resolve').returns(movieRepositorySpy);

        const movieCreated = await createMovieService.execute(movieData);

        expect(movieCreated).toEqual(repositoryRes);
        expect(
            movieRepositorySpy.createAndSave.alwaysCalledWithExactly(movieData),
        ).toBeTruthy();
    });
});
