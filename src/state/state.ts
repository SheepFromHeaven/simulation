import {getInitialResourceState, ResourceState} from './ResourceState';
import {BuildingState, getInitialBuildingState} from './BuildingState';
import {GameState, getInitialGameState} from './GameState';

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
    }
};
