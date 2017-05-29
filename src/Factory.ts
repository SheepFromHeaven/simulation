import {EntityManager} from './EntityManager';

export interface Factory {
    getGlobalEntityManager: () => EntityManager
}
