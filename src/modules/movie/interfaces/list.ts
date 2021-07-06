import { RequestGetAllInterface } from '../../../utils/interfaces/pagination';

export interface MovieRequestGetAllInterface extends RequestGetAllInterface {
    director?: string;
    name?: string;
    genre?: string;
    actors?: string;
}
