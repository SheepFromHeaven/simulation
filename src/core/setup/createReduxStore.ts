import {ApplicationState} from '../AppState';
import {applyMiddleware, combineReducers, createStore, Reducer, Store} from 'redux';
import {game} from '../game/game.reducer';
import {resources} from '../resources/resources.reducer';
import {buildings} from '../buildings/buildings.reducer';
import thunk from 'redux-thunk';

export const createReduxStore = (initialState: ApplicationState): Store<ApplicationState> => {
  const reducer = collectReducers();
  const middleware = applyMiddleware(thunk);
  return createStore(reducer, initialState, middleware);
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
