import {expect} from 'chai';
import {getInitialGameState} from '../GameState';
import {startApp, stopApp, increaseTick} from './game.actions';
import {game} from './game.reducer';

describe('game reducer', () => {
    describe('#start', () => {
        it('should start the app', () => {
            const initialState = getInitialGameState();
            const action = startApp();
            const resultingState = game(initialState, action);

            expect(resultingState.isRunning).to.be.true;
        });
    });

    describe('#stop', () => {
        it('should stop the app', () => {
            const initialState = getInitialGameState();
            initialState.isRunning = true;
            const action = stopApp();
            const resultingState = game(initialState, action);

            expect(resultingState.isRunning).to.be.false;
        });
    });

    describe('#increaseTick', () => {
        it('should increase the tickCounter whan app is running', () => {
            const initialState = getInitialGameState();
            initialState.isRunning = true;
            const action = increaseTick();
            const resultingState = game(initialState, action);

            expect(resultingState.ticksPassed).to.equal(1);
        });

        it('should not increase the tickCounter whan app is not running', () => {
            const initialState = getInitialGameState();
            const action = increaseTick();
            const resultingState = game(initialState, action);

            expect(resultingState.ticksPassed).to.equal(0);
        });
    });
});
