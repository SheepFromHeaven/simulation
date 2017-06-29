import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';

export const RESOURCES_ACTIONS = {
    ADD_RESOURCE: 'ADD_RESOURCE',
    REMOVE_RESOURCE: 'REMOVE_RESOURCE'
};

export const addResource = (type: RESOURCE_TYPE, amount: number) => {
    return {
        type: RESOURCES_ACTIONS.ADD_RESOURCE,
        payload: {
            resourceType: type,
            amount: amount
        }
    }
};

export const removeResource = (type: RESOURCE_TYPE, amount: number) => {
    return {
        type: RESOURCES_ACTIONS.REMOVE_RESOURCE,
        payload: {
            resourceType: type,
            amount: amount
        }
    }
};
