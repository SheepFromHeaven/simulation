import {ApplicationState} from '../AppState';
import {applyMiddleware, combineReducers, createStore, Reducer, Store} from 'redux';
import {game} from '../game/game.reducer';
import {resources} from '../resources/resources.reducer';
import {buildings} from '../buildings/buildings.reducer';
import thunk from 'redux-thunk';

export const createReduxStore = (initialState: ApplicationState, middleware = []): Store<ApplicationState> => {
  const reducer = collectReducers();
  const appliedMiddleware = applyMiddleware(thunk, ...middleware);
  return createStore(reducer, initialState, appliedMiddleware);
};

interface AppReducer {
  buildings;
  resources;
  game;
}

const collectReducers = (): Reducer<AppReducer> =>
  combineReducers({
    buildings,
    resources,
    game
  });
