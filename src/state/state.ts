import {Building} from '../interfaces/Building';
import {Resource} from '../interfaces/Resource';
import {Entity} from '../interfaces/Entity';

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
