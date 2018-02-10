import {Blueprint} from '../Blueprint';
import {addBuilding} from './addBuilding';
import {SimulationModule} from '../../../SimulationModule';

export const createBuildBuildingThunk  = (resourceModule: SimulationModule) =>
  (bp: Blueprint) =>
    (dispatch, getState) => {
      const cost = bp.cost;

      dispatch(resourceModule.actions.removeResource(cost));
      dispatch(addBuilding(bp));
    };
