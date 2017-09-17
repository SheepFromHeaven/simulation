import {getInitialResourceState, ResourceState} from './resources/ResourceState';
import {BuildingState, getInitialBuildingState} from './buildings/BuildingState';
import {GameState, getInitialGameState} from './game/GameState';

export interface ApplicationState {
  buildings: BuildingState;
  resources: ResourceState;
  game: GameState;
}

export const getInitialState = (): ApplicationState => {
  return {
    buildings: getInitialBuildingState(),
    resources: getInitialResourceState(),
    game: getInitialGameState()
  };
};
