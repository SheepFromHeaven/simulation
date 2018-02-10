import {SimulationModule} from '../../SimulationModule';
import {getReducer} from './reducer';
import {getActions} from './actions';
import {getConstants} from './constants';
import {getFunctions} from './functions';

window['createResourceModule'] = (): SimulationModule => ({
  reducer: getReducer(),
  actions: getActions(),
  constants: getConstants(),
  functions: getFunctions(),
  tick: () => () => {}
});
