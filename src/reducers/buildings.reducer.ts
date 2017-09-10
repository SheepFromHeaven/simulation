import {BUILDINGS_ACTIONS} from '../actions/buildings.actions';
import {BuildingState, generateBuildingId, getInitialBuildingState} from '../state/BuildingState';
import {Blueprint} from '../interfaces/Blueprint';
import {Building} from '../interfaces/Building';
import {dissoc, remove} from 'ramda';

export const buildings  = (state: BuildingState = getInitialBuildingState(), action): BuildingState => {
    switch (action.type) {
        case BUILDINGS_ACTIONS.ADD_BUILDING:
            const addingBuilding = createBuildingFrom(action.payload.blueprint);
            return {
                byId: {
                    ...state.byId,
                    [addingBuilding.id]: addingBuilding
                },
                all: [
                    ...state.all,
                    addingBuilding.id
                ]
            };
        case BUILDINGS_ACTIONS.REMOVE_BUILDING:
            return {
                byId: dissoc(action.payload.id, state.byId),
                all: remove(state.all.indexOf(action.payload.id), 1, state.all)
            };
        default:
            return state;
    }
};

const createBuildingFrom = (blueprint: Blueprint): Building => ({
    id: generateBuildingId(),
    type: blueprint.type
});
