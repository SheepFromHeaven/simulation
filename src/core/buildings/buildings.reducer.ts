import {BUILDINGS_ACTIONS} from './buildings.actions';
import {BuildingState, generateBuildingId, getInitialBuildingState} from './BuildingState';
import {Blueprint} from '../entities/Blueprint';
import {Building} from '../entities/Building';
import {dissoc, remove} from 'ramda';
import {Identitfiable} from '../entities/Identifiable';

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

const createBuildingFrom = (blueprint: Blueprint): Identitfiable & Building => ({
  id: generateBuildingId(),
  ...blueprint.building
});
