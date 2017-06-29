import {RESOURCES_ACTIONS} from '../actions/resources.actions';

export const resources = (state = {}, action) => {
    switch (action.type) {
        case RESOURCES_ACTIONS.ADD_RESOURCE:
            let addedState = {...state};
            addedState[action.payload.resourceType] = addedState[action.payload.resourceType] || 0;
            addedState[action.payload.resourceType] += action.payload.amount;
            return addedState;
        case RESOURCES_ACTIONS.REMOVE_RESOURCE:
            let removedState = {...state};
            removedState[action.payload.resourceType] = removedState[action.payload.resourceType] || 0;
            removedState[action.payload.resourceType] -= action.payload.amount;
            return removedState;
        default:
            return state;
    }
};
