import {ApplicationState, getInitialState} from '../core/AppState';
import {addBuilding} from '../core/buildings/buildings.actions';
import {BUILDING_TYPE} from '../core/types/BUILDING_TYPES';
import {BLUEPRINTS} from '../core/blueprints';
import {addResource, removeResource} from '../core/resources/resources.actions';
import {Blueprint} from '../core/entities/Blueprint';
import {Resource} from '../core/entities/Resource';
import {RESOURCE_TYPE} from '../core/types/RESOURCE_TYPES';
import {initReactApp} from './react-init';
import {createReduxApplicationStore} from './redux-init';
import {Store} from 'react-redux';
import {startApp} from '../core/game/game.actions';
import {updateAction} from '../core/updateActions';


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
