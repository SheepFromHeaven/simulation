import {addBuilding} from './addBuilding';
import {removeBuilding} from './removeBuilding';
import {ActionCollection, SimulationModule} from '../../../SimulationModule';
import {createBuildBuildingThunk} from './buildBuildingThunk';

export const getActions = (resourceModule: SimulationModule): ActionCollection => ({
  addBuilding,
  removeBuilding,
  buildBuilding: createBuildBuildingThunk(resourceModule)
});
