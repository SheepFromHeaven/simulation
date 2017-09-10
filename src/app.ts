import {ApplicationState, getInitialState} from './state/state';
import {addBuilding} from './actions/buildings.actions';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {BLUEPRINTS} from './blueprints';
import {addResource, removeResource} from './actions/resources.actions';
import {Blueprint} from './interfaces/Blueprint';
import {Resource} from './interfaces/Resource';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';
import {initReactApp} from './react-init';
import {createReduxApplicationStore} from './redux-init';
import {Store} from 'react-redux';
import {startApp} from './state/game/game.actions';
import {updateAction} from './state/update-logic/update.thunk';


const start = () => {
    const store = createReduxApplicationStore(getInitialState());

    fillInitialStorage(store, [{type: RESOURCE_TYPE.WOOD, amount: 100}]);
    buildInitialBuildings(store, BLUEPRINTS[BUILDING_TYPE.WOODCUTTER]);
    buildInitialBuildings(store, BLUEPRINTS[BUILDING_TYPE.WOODCUTTER]);

    initReactApp('react-app', store);

    startUpdateLoop(store, 1000);

    store.dispatch(startApp());
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

const buildInitialBuildings = (store, blueprint: Blueprint) => {
    if(store.getState().resources.byId[blueprint.cost.type].amount >= blueprint.cost.amount) {
        build(store, blueprint);
    }
};


const fillInitialStorage = (store, resources: Resource[]) => {
    resources.forEach(resource => {
        store.dispatch(addResource(resource));
    });
};

const build = (store, blueprint) => {
    store.dispatch(removeResource(blueprint.cost));
    store.dispatch(addBuilding(blueprint));
};
