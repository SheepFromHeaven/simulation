import 'pixi';
import 'p2';
import * as Phaser from 'phaser';
import SimulationFactory from './SimulationFactory';
import {Factory} from './interfaces/Factory';
import {Entity} from './models/Entity';
import {EntityManager} from './interfaces/EntityManager';

class App {

    game: Phaser.Game;
    factory: Factory;
    globalEntityManager: EntityManager;

    constructor(factory: Factory) {
        this.factory = factory;
        this.globalEntityManager = this.factory.getGlobalEntityManager();
        this.globalEntityManager.registerEntity(new Entity);
        this.game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        console.log(this.globalEntityManager.getAllEntities());
    }

    preload() {

    }

    create() {

    }
}

window.onload = () => {

    let game = new App(new SimulationFactory());

};
