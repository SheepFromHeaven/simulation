import 'pixi';
import 'p2';
import * as Phaser from 'phaser';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {getInitialState} from './state/state';
import { composeWithDevTools } from 'redux-devtools-extension';
import {buildings} from './reducers/buildings.reducer';
import {addBuilding} from './actions/buildings.actions';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {blueprints} from './blueprints';
import {addResource, removeResource} from './actions/resources.actions';
import {Blueprint} from './interfaces/Blueprint';
import {Resource} from './interfaces/Resource';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';
import {resources} from './reducers/resources.reducer';

const start = (graphics: boolean) => {
    let reducers = combineReducers({
        buildings,
        resources
    });
    let store = createStore(reducers, getInitialState(), composeWithDevTools(applyMiddleware()));
    let game;
    if (graphics) {
        game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'content', { preload: phaserPreload, create: phaserCreate });
    }

    fillInitialStorage(store, [{type: RESOURCE_TYPE.WOOD, amount: 100}]);
    buildInitialBuildings(store, blueprints[0]);

    startUpdateLoop(store, game, 1000);
};

const startUpdateLoop = (store, game: Phaser.Game, interval: number) => {
    setInterval(update.bind(this, store, game), interval);
};

const update = (store, game: Phaser.Game) => {

};

const phaserPreload = () => {

};

const phaserCreate = () => {

};

window.onload = () => {

    start(false);

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
    document.getElementById('body').appendChild(element);
};
