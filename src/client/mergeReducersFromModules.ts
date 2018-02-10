import {SimulationModule} from '../SimulationModule';
import {Reducer} from 'redux';

export const mergeReducersFromModules = (modules: SimulationModule[]): {[reducerName: string]:Reducer<{}>} => modules.reduce((reducer, module) => ({
    ...reducer,
    ...mergeReducerFromSingleModule(module)
  }), {});

const mergeReducerFromSingleModule = (module: SimulationModule): {[reducerName: string]:Reducer<{}>} => module.reducer.reduce((reducer, definition) => ({
  ...reducer,
  [definition.name]: definition.reducer
}), {});
