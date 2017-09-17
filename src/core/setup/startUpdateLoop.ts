import {Store} from 'redux';
import {ApplicationState} from '../AppState';
import {updateAction} from '../updateActions/index';

export const startUpdateLoop = (store: Store<ApplicationState>, interval: number) => setInterval(() => {store.dispatch(updateAction());}, interval);
