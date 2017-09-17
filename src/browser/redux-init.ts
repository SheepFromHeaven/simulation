import {ApplicationState} from '../core/AppState';
import {Store} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {buildings} from '../core/buildings/buildings.reducer';
import {resources} from '../core/resources/resources.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {game} from '../core/game/game.reducer';
import thunk from 'redux-thunk';

export const createReduxApplicationStore = (initialState: ApplicationState): Store<ApplicationState> => {
    let reducers = combineReducers({
        buildings,
        resources,
        game
    });
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk))) as Store<ApplicationState>;
};
