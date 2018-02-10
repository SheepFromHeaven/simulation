import {SimulationModule} from '../../SimulationModule';
import {getReducer} from './reducer';
import {getActions} from './actions';
import {getConstants} from './constants';
import {createTickCallback} from './tick/index';

export const createBuildingModule = (resourceModule: SimulationModule): SimulationModule => ({
  reducer: getReducer(),
  actions: getActions(resourceModule),
  constants: getConstants(),
  functions: {},
  tick: createTickCallback(resourceModule)
});
