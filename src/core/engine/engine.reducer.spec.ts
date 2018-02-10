import {expect} from 'chai';
import {startEngine, stopEngine, increaseTick} from './engine.actions';
import engine from './engine.reducer';
import {getInitialEngineState} from './EngineState';

describe('Engine reducer', () => {
  describe('#start', () => {
    it('should start the app', () => {
      const initialState = getInitialEngineState();
      const action = startEngine();
      const resultingState = engine(initialState, action);

      expect(resultingState.isRunning).to.be.true;
    });
  });

  describe('#stop', () => {
    it('should stop the app', () => {
      const initialState = getInitialEngineState();
      initialState.isRunning = true;
      const action = stopEngine();
      const resultingState = engine(initialState, action);

      expect(resultingState.isRunning).to.be.false;
    });
  });

  describe('#increaseTick', () => {
    it('should increase the tickCounter whan app is running', () => {
      const initialState = getInitialEngineState();
      initialState.isRunning = true;
      const action = increaseTick();
      const resultingState = engine(initialState, action);

      expect(resultingState.ticksPassed).to.equal(1);
    });

    it('should not increase the tickCounter whan app is not running', () => {
      const initialState = getInitialEngineState();
      const action = increaseTick();
      const resultingState = engine(initialState, action);

      expect(resultingState.ticksPassed).to.equal(0);
    });
  });
});
