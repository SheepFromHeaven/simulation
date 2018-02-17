import {Store} from 'react-redux';
import {ApplicationState} from '../core/AppState';
import {createReduxApplicationStore} from '../core/store/redux-init';
import {increaseTick, startEngine} from '../core/engine/engine.actions';
import {gameConfig} from '../core/gameConfig';
import {SimulationModule} from '../SimulationModule';
import {createAppModules} from './createAppModules';
import {createUiOnElementWitId} from './createUi';
import {BLUEPRINTS} from '../settings/blueprints';
import {BUILDING_TYPE} from '../modules/buildings/constants/BUILDING_TYPES';


const start = () => {
  const modules = createAppModules();

  const store = createReduxApplicationStore(modules);

  createUiOnElementWitId('app-ui', store);

  startUpdateLoop(createTickCallback(store, modules), gameConfig.tickInterval);

  store.dispatch(startEngine());

  const actions = modules.reduce((previousValue, currentModue) => ({
    ...previousValue,
    ...currentModue.actions
  }), {});
  store.dispatch(actions['buildBuilding'](BLUEPRINTS[BUILDING_TYPE.WOODCUTTER]));
};

const startUpdateLoop = (tick: Function, interval: number) => {
  setInterval(tick, interval);
};

const createTickCallback = (store: Store<ApplicationState>, modules: SimulationModule[]) =>
  () => {
    store.dispatch(increaseTick());

    const state = store.getState();
    if (state.engine.isRunning) {
      modules.forEach(m => {
        store.dispatch(m.tick());
      });
    }
  };

window.onload = () => {
  start();
};
