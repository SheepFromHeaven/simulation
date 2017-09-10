import {Building} from '../interfaces/Building';
import {getInitialResourceState, ResourceState} from './ResourceState';

export interface ApplicationState {
    buildings: Building[];
    resources: ResourceState;
}

export const getInitialState = (): ApplicationState => {
    return {
        buildings: [],
        resources: getInitialResourceState()
    }
};
