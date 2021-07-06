import { container } from 'tsyringe';
import MovieRepository from '../modules/movie/repositories';
import CreateMovieService from '../modules/movie/services/create';

container.registerSingleton<MovieRepository>('MovieRepository', MovieRepository);
container.registerSingleton<CreateMovieService>('MovieService', CreateMovieService);
