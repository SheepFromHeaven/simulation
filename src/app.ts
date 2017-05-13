import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

class App {

    constructor() {
        this.game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {

    }

    create() {

    }

}

window.onload = () => {

    let game = new App();

};
