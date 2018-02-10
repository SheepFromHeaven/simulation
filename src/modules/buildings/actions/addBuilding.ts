import {Blueprint} from '../Blueprint';
import {BUILDINGS_ACTIONS} from '../constants/BUILDING_ACTIONS';

export const addBuilding = (blueprint: Blueprint) => {
  return {
    type: BUILDINGS_ACTIONS.ADD_BUILDING,
    payload: {
      blueprint
    }
  };
};
