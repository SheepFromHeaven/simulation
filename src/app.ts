import 'pixi';
import 'p2';
import * as Phaser from 'phaser';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {getInitialState} from './state/state';
import { composeWithDevTools } from 'redux-devtools-extension';
import {buildings} from './reducers/buildings.reducer';

const start = (graphics: boolean) => {
    let reducers = combineReducers({
        buildings
    });
    let store = createStore(reducers, getInitialState(), composeWithDevTools(applyMiddleware()));
    let game;
    if (graphics) {
        game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'content', { preload: phaserPreload, create: phaserCreate });
    }
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
