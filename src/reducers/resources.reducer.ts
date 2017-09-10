import {RESOURCES_ACTIONS} from '../actions/resources.actions';
import {getInitialResourceState, ResourceState} from '../state/ResourceState';
import {addResources, substractResources} from '../interfaces/Resource';

export const resources = (state: ResourceState = getInitialResourceState(), action): ResourceState => {
    switch (action.type) {
        case RESOURCES_ACTIONS.ADD_RESOURCE:
            return {
                all: addIfNotExist(state.all, action.payload.resource.type),
                byId: {
                    ...state.byId,
                    [action.payload.resource.type]: addResources(state.byId[action.payload.resource.type], action.payload.resource)[0]
                }
            };
        case RESOURCES_ACTIONS.REMOVE_RESOURCE:
            return {
                all: addIfNotExist(state.all, action.payload.resource.type),
                byId: {
                    ...state.byId,
                    [action.payload.resource.type]: substractResources(state.byId[action.payload.resource.type], action.payload.resource)[0]
                }
            };
        default:
            return state;
    }
};

const addIfNotExist = (array, item)  => {
    if(array.indexOf(item) === -1) {
        return [
            ...array,
            item
        ];
    }
    return array;
};
