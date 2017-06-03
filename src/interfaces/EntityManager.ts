import {Entity} from '../models/Entity';

export interface EntityManager {
    registerEntity: (Entity) => void,
    getAllEntities: () => Entity[],
    getEntityById: (number) => Entity
}
