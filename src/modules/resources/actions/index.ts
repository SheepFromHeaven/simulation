import {ActionCollection} from '../../../SimulationModule';
import {addResource} from './addResource';
import {removeResource} from './removeResource';

export const getActions = (): ActionCollection => ({
  addResource,
  removeResource
});
