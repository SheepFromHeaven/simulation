import {BuildingModule} from '../interfaces/BuildingModule';
import {Resource} from '../interfaces/Resource';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';

export class StorageModule implements BuildingModule {
    private inventory: number[] = [];

    update() {

    }

    get(type: RESOURCE_TYPE) {
        return this.inventory[type];
    }

    fill(resource: Resource) {
        if(!this.inventory[resource.type]) {
            this.inventory[resource.type] = 0;
        }
        this.inventory[resource.type] += resource.amount;
    }

    remove(resource: Resource) {
        if(this.inventory[resource.type] < resource.amount) {
            resource.amount = this.inventory[resource.type];
        }
        this.inventory[resource.type] -= resource.amount;
        return resource;
    }
}
