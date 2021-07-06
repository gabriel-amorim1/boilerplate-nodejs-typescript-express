import * as yup from 'yup';

export const createMovieSchema = yup.object().shape({
    director: yup.string().strict(true).required(),
    name: yup.string().strict(true).required(),
    genre: yup.string().strict(true).required(),
    actors: yup.string().strict(true).required(),
});

export const listMovieSchema = yup.object().shape({
    director: yup.string().strict(true),
    name: yup.string().strict(true),
    genre: yup.string().strict(true),
    actors: yup.string().strict(true),
});
