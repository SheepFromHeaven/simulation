import {SimulationModule} from './SimulationModule';
import {ReducerDefinition} from './ReducerDefinition';

class SimulationModuleBuilder {
  static createSimulationModule () {
    return new SimulationModuleBuilder();
  }

  private REDUCER: ReducerDefinition[] = [];
  private ACTIONS = {};
  private CONSTANTS = {};
  private FUNCTIONS = {};
  private TICK = () => () => {};

  addReducerDefinition(reducer: ReducerDefinition) {
    this.REDUCER.push(reducer);
    return this;
  }

  build (): SimulationModule {
    return {
      reducer: this.REDUCER,
      actions: this.ACTIONS,
      constants: this.CONSTANTS,
      functions: this.FUNCTIONS,
      tick: this.TICK
    };
  }
}

export const createSimulationModule = SimulationModuleBuilder.createSimulationModule;
