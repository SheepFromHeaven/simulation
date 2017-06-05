import { BuildingModule } from '../interfaces/BuildingModule';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {Resource} from '../interfaces/Resource';

export class ResourceModule implements BuildingModule {

    private resource: Resource;
    private productionInterval: number;
    private onProductionComplete: (Resource)=>void;

    private productionIntervalCounter: number = 0;

    constructor (resource: Resource, productionInterval: number, onProductionComplete: (Resource)=>void) {

        this.resource = resource;
        this.productionInterval = productionInterval;
        this.onProductionComplete = onProductionComplete;

    }

    update () {
        this.productionIntervalCounter++;
        if(this.productionIntervalCounter % this.productionInterval == 0) {
          this.onProductionComplete(this.resource);
        }
    }
}
