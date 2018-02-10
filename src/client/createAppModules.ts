import {SimulationModule} from '../SimulationModule';
import {createBuildingModule} from '../modules/buildings/index';

export const createAppModules = (): SimulationModule[] => {
  const resourceModule = window['createResourceModule']();
  const buildingModule = createBuildingModule(resourceModule);
  return [
    resourceModule,
    buildingModule
  ];
};
