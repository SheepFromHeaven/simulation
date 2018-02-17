import {initReactApp} from './react-init';
import {Store} from 'redux';
import {ApplicationState} from '../core/AppState';

export const createUiOnElementWitId = (id: string, reduxStore: Store<ApplicationState>) => {
  initReactApp(id, reduxStore)
};
