import { container } from 'tsyringe';
import MovieRepository from '../modules/movie/repositories/movieRepository';
import MovieService from '../modules/movie/services/movieService';

container.registerSingleton<MovieRepository>('MovieRepository', MovieRepository);

container.registerSingleton<MovieService>('MovieService', MovieService);
