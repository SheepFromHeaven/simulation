import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';

export const config = {
    intitial: {
        buildings: {
            [BUILDING_TYPE.MAIN]: 1
        },
        resources: {
            [RESOURCE_TYPE.WOOD]: 100
        }
    }
};
