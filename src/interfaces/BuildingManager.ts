import {Building} from '../models/Building';

export interface BuildingManager {
    registerBuilding: (Building) => void,
    getAllBuildings: () => Building[],
    getBuildingById: (number) => Building
}
