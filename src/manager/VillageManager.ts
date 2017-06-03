import {BuildingManager} from '../interfaces/BuildingManager';
import {Building} from '../models/Building';
import {EntityManager} from '../interfaces/EntityManager';

export default class VillageManager implements BuildingManager {
    private buildings: Building[] = [];
    private entityManager: EntityManager;

    constructor(entityManager: EntityManager) {
        this.entityManager = entityManager;
    }

    registerBuilding(building: Building) {
        this.entityManager.registerEntity(building);
        this.buildings.push(building);
    }

    getAllBuildings() {
        return this.buildings;
    }

    getBuildingById(id) {
        return this.buildings.filter((building) => {
            return building.id == id;
        })[0];
    }
}
