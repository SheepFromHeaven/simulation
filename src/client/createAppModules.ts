import {SimulationModule} from '../SimulationModule';

export const createAppModules = (): SimulationModule[] => {
  const resourceModule = window['createResourceModule']();
  const buildingModule = window['createBuildingModule'](resourceModule);
  return [
    resourceModule,
    buildingModule
  ];
};
