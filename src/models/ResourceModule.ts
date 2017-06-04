import { BuildingModule } from '../interfaces/BuildingModule';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';

export class ResourceModule implements BuildingModule {

    private resourceType: RESOURCE_TYPE;
    private productionSize: number;
    private productionInterval: number;
    private onProductionComplete: (number)=>void;

    constructor (resourceType: RESOURCE_TYPE, productionSize: number, productionInterval: number, onProductionComplete: (number)=>void) {
        this.resourceType = resourceType;
        this.productionSize = productionSize;
        this.productionInterval = productionInterval;
        this.onProductionComplete = onProductionComplete;
    }

    update () {

    }
}
