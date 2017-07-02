import {Blueprint} from './interfaces/Blueprint';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';

export const blueprints: Blueprint[] = [
    {
        building: {
            type: BUILDING_TYPE.MAIN
        },
        cost: {
            type: RESOURCE_TYPE.WOOD,
            amount: 10
        }
    }
];
