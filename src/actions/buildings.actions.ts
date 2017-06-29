import {BUILDING_TYPE} from '../types/BUILDING_TYPES';

export const BUILDINGS_ACTIONS =  {
    ADD_BUILDING: 'ADD_BUILDING'
};

export const addBuilding = (type: BUILDING_TYPE) => {
    return {
        type: BUILDINGS_ACTIONS.ADD_BUILDING,
        payload: {
            buildingType: type
        }
    }
};
