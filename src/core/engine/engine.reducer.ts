import {EngineState, getInitialEngineState} from './EngineState';
import {ENGINE_ACTIONS} from './engine.actions';
import {Action, Reducer} from 'redux';

const reducer: Reducer<EngineState> = (state: EngineState = getInitialEngineState(), action: Action) => {
  switch(action.type) {
    case ENGINE_ACTIONS.START:
      return {
        ...state,
        isRunning: true
      };
    case ENGINE_ACTIONS.STOP:
      return {
        ...state,
        isRunning: false
      };
    case ENGINE_ACTIONS.TICK:
      return {
        ...state,
        ticksPassed: state.isRunning ? state.ticksPassed + 1 : state.ticksPassed
      };
    default:
      return state;
  }
};

export default reducer;
