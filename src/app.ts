import {getInitialState} from './state/state';
import {addBuilding} from './actions/buildings.actions';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {blueprints} from './blueprints';
import {addResource, removeResource} from './actions/resources.actions';
import {Blueprint} from './interfaces/Blueprint';
import {Resource} from './interfaces/Resource';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';
import {initReactApp} from './react-init';
import {createReduxApplicationStore} from './redux-init';


const start = () => {
    const store = createReduxApplicationStore(getInitialState());

    fillInitialStorage(store, [{type: RESOURCE_TYPE.WOOD, amount: 9}]);
    buildInitialBuildings(store, blueprints[BUILDING_TYPE.MAIN]);

    initReactApp('react-app', store);

    startUpdateLoop(store, 1000);
};


const startUpdateLoop = (store, interval: number) => {
    setInterval(update.bind(this, store), interval);
};

const update = (store) => {

};

window.onload = () => {
    start();
};

const buildInitialBuildings = (store, blueprint: Blueprint) => {
    if(store.getState().resources[blueprint.cost.type] >= blueprint.cost.amount) {
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
    let element = document.createElement('div');
    element.appendChild(document.createTextNode(blueprint.building.type));
    document.getElementById('buildings').appendChild(element);
};
