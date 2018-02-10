import {Store} from 'react-redux';
import {ApplicationState} from '../core/AppState';
import {initReactApp} from './react-init';
import {createReduxApplicationStore} from '../core/store/redux-init';
import {increaseTick, startEngine} from '../core/engine/engine.actions';
import {gameConfig} from '../core/gameConfig';
import {SimulationModule} from '../SimulationModule';
import {createAppModules} from './createAppModules';


const start = () => {
  const modules = createAppModules();

  const store = createReduxApplicationStore(modules);

  initReactApp('react-app', store);

  startUpdateLoop(createTickCallback(store, modules), gameConfig.tickInterval);

  store.dispatch(startEngine());
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
