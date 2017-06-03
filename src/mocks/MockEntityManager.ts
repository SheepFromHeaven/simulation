import {EntityManager} from '../interfaces/EntityManager';
import {Entity} from '../models/Entity';
import * as sinon from 'sinon';

export default class MockEntityManager implements EntityManager {
    public registerEntity = sinon.spy();

    getAllEntities(): Entity[] {
        return [];
    }

    getEntityById(id): Entity {
        return null;
    }
}
