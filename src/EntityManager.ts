import {Entity} from './Entity';

export interface EntityManager {
    registerEntity: (Entity) => void,
    getAllEntities: () => Entity[],
    getEntityById: (number) => Entity
}
