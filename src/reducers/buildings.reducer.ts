import {BUILDINGS_ACTIONS} from '../actions/buildings.actions';
import {Blueprint} from '../interfaces/Blueprint';

export const buildings  = (state = [], action) => {
    switch (action.type) {
        case BUILDINGS_ACTIONS.ADD_BUILDING:
            return [...state, newBuilding(state.length, action.payload.blueprint)];
        default:
            return state;
    }
};

const newBuilding = (id: number, blueprint: Blueprint) => {
    return {
        id: id,
        type: blueprint.building.type
    }
};
