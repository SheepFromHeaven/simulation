import {increaseTick} from '../game/game.actions';
import {updateProduction} from './production';
import {ThunkAction} from 'redux-thunk';
import {ApplicationState} from '../AppState';

export const updateAction = (): ThunkAction<void, ApplicationState, {}> =>
  (dispatch, getState) => {
    const originalState = getState();
    dispatch(increaseTick());
    const currentState = getState();
    if(currentState.game.ticksPassed !== originalState.game.ticksPassed) {
      updateProduction(dispatch, currentState);
    }
  };
