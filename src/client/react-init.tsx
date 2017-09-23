import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, Store} from 'react-redux';
import {ApplicationState} from '../core/AppState';
import {TopbarContainer} from './containers/TopbarContainer/TopbarContainer';

export const initReactApp = (id: string, reduxStore: Store<ApplicationState>) => {
    ReactDOM.render(
        <Provider store={reduxStore}>
            <TopbarContainer/>
        </Provider>,
        document.getElementById(id)
    );
};
