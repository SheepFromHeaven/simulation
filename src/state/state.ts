import {Building} from '../interfaces/Building';

export interface ReduxState {
    buildings: Building[];
    resources: number[];
}

export const getInitialState = (): ReduxState => {
    return {
        buildings: [],
        resources: []
    }
};
