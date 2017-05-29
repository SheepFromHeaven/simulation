import { expect } from 'chai';
import GlobalEntityManager from './GlobalEntityManager';
import {Entity} from './Entity';

let globalEntityManager;

describe('Global Entity Manager', () => {
    beforeEach(() => {
        globalEntityManager = new GlobalEntityManager();
    });

    it('registers entities', () => {
        let newEntity = new Entity();

        expect(globalEntityManager.entities).to.have.lengthOf(0);

        globalEntityManager.registerEntity(newEntity);

        expect(globalEntityManager.entities).to.have.lengthOf(1);
        expect(newEntity.id).to.equal(0);
    });

    it('doesnt register a existing entity', () => {
        let newEntity = new Entity();

        expect(globalEntityManager.entities).to.have.lengthOf(0);

        globalEntityManager.registerEntity(newEntity);

        expect(globalEntityManager.registerEntity.bind(globalEntityManager, newEntity)).to.throw('Entity already registered!');
        expect(newEntity.id).to.equal(0);
    });

    it('serves all entities', () => {
        globalEntityManager.registerEntity(new Entity());
        globalEntityManager.registerEntity(new Entity());

        expect(globalEntityManager.getAllEntities()).to.deep.equal(globalEntityManager.entities);
    });

    it('finds entity by id', () => {
        globalEntityManager.registerEntity(new Entity());
        let secondGlobalEntity = new Entity();
        globalEntityManager.registerEntity(secondGlobalEntity);

        expect(globalEntityManager.getEntityById(1)).to.deep.equal(secondGlobalEntity);
    });
});
