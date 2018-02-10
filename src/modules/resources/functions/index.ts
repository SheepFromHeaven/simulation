import {addResources} from './addResources';
import {FunctionCollection} from '../../../SimulationModule';
import {substractResources} from './substractResources';

export const getFunctions = (): FunctionCollection => ({
  addResources,
  substractResources
});
