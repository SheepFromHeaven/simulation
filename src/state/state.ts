import {getInitialResourceState, ResourceState} from './ResourceState';
import {BuildingState, getInitialBuildingState} from './BuildingState';

export interface ApplicationState {
    buildings: BuildingState;
    resources: ResourceState;
}

export const getInitialState = (): ApplicationState => {
    return {
        buildings: getInitialBuildingState(),
        resources: getInitialResourceState()
    }
};
