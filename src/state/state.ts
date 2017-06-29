import {Building} from '../interfaces/Building';
import {Resource} from '../interfaces/Resource';

export interface ReduxState {
    buildings: Building[];
    resources: Resource[];
}

export const getInitialState = (): ReduxState => {
    return {
        buildings: [],
        resources: []
    }
};
