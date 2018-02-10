import {ApplicationState} from '../AppState';
import {Store} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import engine from '../engine/engine.reducer';
import thunk from 'redux-thunk';
import {mergeReducersFromModules} from '../../client/mergeReducersFromModules';
import {SimulationModule} from '../../SimulationModule';
import {createInitialStateFromModules} from '../../client/createInitialStateFromModules';

export const createReduxApplicationStore = (modules: SimulationModule[]): Store<ApplicationState> => {
  const reducers = combineReducers({
    ...mergeReducersFromModules(modules),
    engine
  });

  const initialState = createInitialStateFromModules(modules);

  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk))) as Store<ApplicationState>;
};
