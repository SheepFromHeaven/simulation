import {ThunkAction} from 'redux-thunk';
import {ApplicationState} from '../../../core/AppState';
import {SimulationModule} from '../../../SimulationModule';
import {updateProduction} from './production';

export const createTickCallback = (resourceModule: SimulationModule) =>
  (): ThunkAction<void, ApplicationState, {}> =>
    (dispatch, getState) => {
      dispatch(updateProduction());
    };
