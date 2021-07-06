import sinon from 'sinon';
import request from 'supertest';
import { container } from 'tsyringe';
import app from '../../../../app';
import ListMovieService from '../../services/list';

describe('List Movie Route context', () => {
    let listMovieServiceSpy: sinon.SinonStubbedInstance<ListMovieService>;

    beforeEach(() => {
        sinon.restore();
        listMovieServiceSpy = sinon.createStubInstance(ListMovieService);
    });

    it('should call list controller and returns status 200', async () => {
        listMovieServiceSpy.execute.resolves(<any>'movies');
        sinon.stub(container, 'resolve').returns(listMovieServiceSpy);

        const res = await request(app).get('/api/movie');

        expect(res.status).toBe(200);
        expect(res.body).toEqual('movies');
        expect(listMovieServiceSpy.execute.calledWithExactly(<any>{})).toBeTruthy();
    });

    it('should call list controller with filters and returns status 200', async () => {
        listMovieServiceSpy.execute.resolves(<any>'movies');
        sinon.stub(container, 'resolve').returns(listMovieServiceSpy);

        const filters = {
            name: 'name',
            director: 'director',
            actors: 'actors',
            genre: 'genre',
        };

        const res = await request(app).get(
            '/api/movie?name=name&director=director&actors=actors&genre=genre',
        );

        expect(res.status).toBe(200);
        expect(res.body).toEqual('movies');
        expect(
            listMovieServiceSpy.execute.calledWithExactly(<any>filters),
        ).toBeTruthy();
    });
});
