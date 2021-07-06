import sinon from 'sinon';
import { container } from 'tsyringe';
import { v4 } from 'uuid';
import MovieRepository from '../../repositories';
import ListMovieService from '../list';

describe('List Movie Service context', () => {
    let movieRepositorySpy: sinon.SinonStubbedInstance<MovieRepository>;
    let listMovieService: ListMovieService;

    beforeEach(() => {
        sinon.restore();
        movieRepositorySpy = sinon.createStubInstance(MovieRepository);
        listMovieService = new ListMovieService(<any>movieRepositorySpy);
    });

    it('should create a new movie and call create movie repository function', async () => {
        const movieData = {
            director: 'Leigh Janiak',
            name: 'Fear Street 2',
            genre: 'Horror',
            actors: 'Sadie Sink, Emily Rudd, Ryan Simpkins',
            id: v4(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        const repositoryRes = {
            data: [movieData],
            count: 1,
        };

        movieRepositorySpy.getAll.resolves(repositoryRes);
        sinon.stub(container, 'resolve').returns(movieRepositorySpy);

        const res = await listMovieService.execute({});

        const options = {
            where: {},
            order: { created_at: 'DESC' },
            take: 20,
            skip: 0,
            orderBy: { columnName: 'created_at', order: 'DESC' },
        };

        expect(res).toEqual({ ...repositoryRes, limit: 20, page: 1, totalPages: 1 });
        expect(
            movieRepositorySpy.getAll.alwaysCalledWithExactly(<any>options),
        ).toBeTruthy();
    });
});
