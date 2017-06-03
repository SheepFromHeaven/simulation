import { expect } from 'chai';
import VillageManager from './VillageManager';
import {Building} from '../models/Building';
import MockEntityManager from '../mocks/MockEntityManager';

let villageManager;
let mockEntityManager;

describe('Village Manager', () => {
    beforeEach(() => {
        mockEntityManager = new MockEntityManager();
        villageManager = new VillageManager(mockEntityManager);
    });

    it('registers buildings', () => {
        let newBuilding = new Building();
        expect(villageManager.buildings).to.have.lengthOf(0);

        villageManager.registerBuilding(newBuilding);

        expect(villageManager.buildings).to.have.lengthOf(1);
    });

    it('serves all buildings', () => {
        villageManager.registerBuilding(new Building());
        villageManager.registerBuilding(new Building());

        expect(villageManager.getAllBuildings()).to.deep.equal(villageManager.buildings);
    });

    it('registers the building as entity', () => {
        let building = new Building();
        villageManager.registerBuilding(building);

        expect(mockEntityManager.registerEntity).to.have.been.calledOnce;
        expect(mockEntityManager.registerEntity).to.have.been.calledWith(building);
    });

    it('gets building by id', () => {
        let building = new Building();
        villageManager.registerBuilding(building);

        expect(villageManager.getBuildingById(building.id)).to.equal(building);
    });
});
