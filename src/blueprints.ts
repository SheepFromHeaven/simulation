import {Blueprint} from './interfaces/Blueprint';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {createResource} from './builder/ResourceBuilder';

export const BLUEPRINTS: {[buildingType: string]: Blueprint} = {
    [BUILDING_TYPE.MAIN]: {
        type: BUILDING_TYPE.MAIN,
        cost: createResource().withType(RESOURCE_TYPE.WOOD).withAmount(100).build()
    }
};

