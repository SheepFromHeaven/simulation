import {GameState, getInitialGameState} from './GameState';
import {GAME_ACTIONS} from './game.actions';

export const game = (state: GameState = getInitialGameState(), action): GameState => {
  switch(action.type) {
    case GAME_ACTIONS.START:
      return {
        ...state,
        isRunning: true
      };
    case GAME_ACTIONS.STOP:
      return {
        ...state,
        isRunning: false
      };
    case GAME_ACTIONS.TICK:
      return {
        ...state,
        ticksPassed: state.isRunning ? state.ticksPassed + 1 : state.ticksPassed
      };
    default:
      return state;
  }
};
