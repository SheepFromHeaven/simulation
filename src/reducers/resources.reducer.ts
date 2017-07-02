import {RESOURCES_ACTIONS} from '../actions/resources.actions';

export const resources = (state = {}, action) => {
    switch (action.type) {
        case RESOURCES_ACTIONS.ADD_RESOURCE:
            let addedState = {...state};
            addedState[action.payload.resource.type] = addedState[action.payload.resource.type] + action.payload.resource.amount || action.payload.resource.amount;
            return addedState;
        case RESOURCES_ACTIONS.REMOVE_RESOURCE:
            let removedState = {...state};
            removedState[action.payload.resource.type] = removedState[action.payload.resource.type] - action.payload.resource.amount || 0;
            return removedState;
        default:
            return state;
    }
};
