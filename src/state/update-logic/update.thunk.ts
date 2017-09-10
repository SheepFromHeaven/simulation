import {increaseTick} from '../game/game.actions';
import {updateProduction} from './production';

export const updateAction = () =>
    (dispatch, getState) => {
        dispatch(increaseTick());
        const state = getState();

        updateProduction(dispatch, state);
    };
