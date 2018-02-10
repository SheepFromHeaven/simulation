import {SimulationModule} from '../SimulationModule';

export const createInitialStateFromModules = (modules: SimulationModule[]) =>  modules.reduce((reducer, module) => ({
  ...reducer,
  ...createInitialStateFromSingleModule(module)
}), {});

const createInitialStateFromSingleModule = (module: SimulationModule): {[reducerName: string]: any} => module.reducer.reduce((reducer, definition) => ({
  ...reducer,
  [definition.name]: definition.initialStateGetter()
}), {});
