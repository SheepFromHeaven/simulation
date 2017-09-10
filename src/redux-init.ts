import {ApplicationState} from './state/state';
import {Store} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {buildings} from './reducers/buildings.reducer';
import {resources} from './reducers/resources.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const createReduxApplicationStore = (initialState: ApplicationState): Store<ApplicationState> => {
    let reducers = combineReducers({
        buildings,
        resources
    });
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware())) as Store<ApplicationState>;
};
