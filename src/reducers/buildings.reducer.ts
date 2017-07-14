import {BUILDINGS_ACTIONS} from '../actions/buildings.actions';
import {Building} from '../interfaces/Building';
import {Blueprint} from '../interfaces/Blueprint';

export const buildings  = (state: Building[] = [], action) => {
    switch (action.type) {
        case BUILDINGS_ACTIONS.ADD_BUILDING:
            return [...state, newBuilding(state.length, action.payload.blueprint)];
        case BUILDINGS_ACTIONS.REMOVE_BUILDING:
            return state.filter(building => action.payload.id != building.id);
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
