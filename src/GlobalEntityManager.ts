import {EntityManager} from './EntityManager';
import {Entity} from './Entity';

export default class GlobalEntityManager implements EntityManager {
    private entities: Entity[] = [];

    registerEntity(entity: Entity): void {
        if(!this.getEntityById(entity.id)) {
            entity.id = this.entities.length;
            this.entities.push(entity);
        } else {
            throw 'Entity already registered!';
        }
    }

    getAllEntities(): Entity[] {
        return this.entities;
    }

    getEntityById(id): Entity {
        return this.entities.filter((entity) => {
            return entity.id == id;
        })[0];
    }
}
