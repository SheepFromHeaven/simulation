import {BuildingState, generateBuildingId, getInitialBuildingState} from '../BuildingState';
import {Blueprint} from '../Blueprint';
import {Building} from '../Building';
import {dissoc} from 'ramda';
import {Identifiable} from '../../../core/Identifiable';
import {BUILDINGS_ACTIONS} from '../constants/BUILDING_ACTIONS';

const reducer  = (state: BuildingState = getInitialBuildingState(), action): BuildingState => {
  switch (action.type) {
    case BUILDINGS_ACTIONS.ADD_BUILDING:
      const addingBuilding = createBuildingFrom(action.payload.blueprint);
      return {
        ...state,
        [addingBuilding.id]: addingBuilding
      };
    case BUILDINGS_ACTIONS.REMOVE_BUILDING:
      return dissoc(action.payload.id, state) as BuildingState;
    default:
      return state;
  }
};

const createBuildingFrom = (blueprint: Blueprint): Identifiable & Building => ({
  id: generateBuildingId(),
  ...blueprint.building
});

export default reducer;
