import sinon from 'sinon';
import request from 'supertest';
import { container } from 'tsyringe';
import { v4 } from 'uuid';
import app from '../../../../app';
import CreateMovieService from '../../services/create';

describe('Create Movie Route context', () => {
    let createMovieServiceSpy: sinon.SinonStubbedInstance<CreateMovieService>;

    beforeEach(() => {
        sinon.restore();
        createMovieServiceSpy = sinon.createStubInstance(CreateMovieService);
    });

    it('should call create controller with movie data and returns status 201', async () => {
        const movieData = {
            director: 'Leigh Janiak',
            name: 'Fear Street 2',
            genre: 'Horror',
            actors: 'Sadie Sink, Emily Rudd, Ryan Simpkins',
        };

        const serviceRes = {
            ...movieData,
            id: v4(),
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
        };

        createMovieServiceSpy.execute.resolves(<any>serviceRes);
        sinon.stub(container, 'resolve').returns(createMovieServiceSpy);

        const res = await request(app).post('/api/movie').send(movieData);

        expect(res.status).toBe(201);
        expect(res.body).toEqual(serviceRes);
        expect(
            createMovieServiceSpy.execute.calledWithExactly(movieData),
        ).toBeTruthy();
    });

    it('should not call create controller and return status 400 when not send params', async () => {
        const res = await request(app).post('/api/movie');

        expect(res.status).toBe(400);
        expect(res.body.errors).toStrictEqual([
            'director is a required field',
            'name is a required field',
            'genre is a required field',
            'actors is a required field',
        ]);
        expect(createMovieServiceSpy.execute.notCalled).toBeTruthy();
    });
});
