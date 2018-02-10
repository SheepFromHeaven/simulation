import {SimulationModule} from '../SimulationModule';
import {createResourceModule} from '../modules/resources/index';
import {createBuildingModule} from '../modules/buildings/index';

export const createAppModules = (): SimulationModule[] => {
  const resourceModule = createResourceModule();
  const buildingModule = createBuildingModule(resourceModule);
  return [
    resourceModule,
    buildingModule
  ];
};
