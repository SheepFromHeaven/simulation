import {BUILDINGS_ACTIONS} from '../constants/BUILDING_ACTIONS';

export const removeBuilding = (id: string) => {
  return {
    type: BUILDINGS_ACTIONS.REMOVE_BUILDING,
    payload: {
      id
    }
  };
};
