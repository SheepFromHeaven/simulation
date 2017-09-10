import {Blueprint} from '../interfaces/Blueprint';

export const BUILDINGS_ACTIONS =  {
    ADD_BUILDING: 'ADD_BUILDING',
    REMOVE_BUILDING: 'REMOVE_BUILDING'
};

export const addBuilding = (blueprint: Blueprint) => {
    return {
        type: BUILDINGS_ACTIONS.ADD_BUILDING,
        payload: {
            blueprint: blueprint
        }
    }
};

export const removeBuilding = (id: string) => {
    return {
        type: BUILDINGS_ACTIONS.REMOVE_BUILDING,
        payload: {
            id: id
        }
    }
};
