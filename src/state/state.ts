import {Building} from '../interfaces/Building';

export interface ReduxState {
    buildings: Building[];
}

export const getInitialState = (): ReduxState => {
    return {
        buildings: []
    }
};
