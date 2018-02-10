import {BuildingState, getInitialBuildingState} from '../modules/buildings/BuildingState';
import {EngineState, getInitialEngineState} from './engine/EngineState';
import {getInitialResourceState, ResourceState} from '../modules/resources/ResourceState';

export interface ApplicationState {
  buildings: BuildingState;
  resources: ResourceState;
  engine: EngineState;
}

export const getInitialState = (): ApplicationState => {
  return {
    buildings: getInitialBuildingState(),
    resources: getInitialResourceState(),
    engine: getInitialEngineState()
  };
};
