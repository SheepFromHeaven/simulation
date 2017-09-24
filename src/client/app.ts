import {ApplicationState, getInitialState} from '../core/AppState';
import {initReactApp} from './react-init';
import {createReduxApplicationStore} from './redux-init';
import {Store} from 'react-redux';
import {updateAction} from '../core/updateActions';
import * as io from 'socket.io-client';


const start = () => {
  let store: Store<ApplicationState>;
  const socket = io(window.location.hostname + ':8081');

  socket.on('init', state => {
    console.log(state);
    store = createReduxApplicationStore(state);
    initReactApp('react-app', store);
  });

  socket.on('action',(action) => {
    console.log(action);
    store.dispatch(action);
  });
};


const startUpdateLoop = (store, interval: number) => {
  setInterval(update.bind(this, store), interval);
};

const update = (store: Store<ApplicationState>) => {
  const state = store.getState();

  if(state.game.isRunning) {
    store.dispatch(updateAction());
  }
};

window.onload = () => {
  start();
};
