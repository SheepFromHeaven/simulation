import {Resource} from '../interfaces/Resource';

export const RESOURCES_ACTIONS = {
    ADD_RESOURCE: 'ADD_RESOURCE',
    REMOVE_RESOURCE: 'REMOVE_RESOURCE'
};

export const addResource = (resource: Resource) => {
    return {
        type: RESOURCES_ACTIONS.ADD_RESOURCE,
        payload: {
            resource: resource
        }
    }
};

export const removeResource = (resource: Resource) => {
    return {
        type: RESOURCES_ACTIONS.REMOVE_RESOURCE,
        payload: {
            resource: resource
        }
    }
};
