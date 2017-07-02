import {Blueprint} from '../interfaces/Blueprint';

export const BUILDINGS_ACTIONS =  {
    ADD_BUILDING: 'ADD_BUILDING'
};

export const addBuilding = (blueprint: Blueprint) => {
    return {
        type: BUILDINGS_ACTIONS.ADD_BUILDING,
        payload: {
            blueprint: blueprint
        }
    }
};
