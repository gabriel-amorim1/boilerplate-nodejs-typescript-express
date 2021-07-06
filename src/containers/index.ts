import { container } from 'tsyringe';
import MovieRepository from '../modules/movie/repositories';
import CreateMovieService from '../modules/movie/services/create';
import ListMovieService from '../modules/movie/services/list';

container.registerSingleton<MovieRepository>('MovieRepository', MovieRepository);
container.registerSingleton<CreateMovieService>(
    'CreateMovieService',
    CreateMovieService,
);
container.registerSingleton<ListMovieService>('ListMovieService', ListMovieService);
