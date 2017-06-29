import {BUILDINGS_ACTIONS} from '../actions/buildings.actions';
export const buildings  = (state = [], action) => {
    switch (action.type) {
        case BUILDINGS_ACTIONS.ADD_BUILDING:
            return [...state, {id: state.length, type: action.payload.buildingType}];
        default:
            return state;
    }
};
