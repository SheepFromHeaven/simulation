import {ActionCreator} from 'redux';
import {ConstantCollection} from './ConstantCollection';
import {ReducerDefinition} from './ReducerDefinition';
import {ThunkAction} from 'redux-thunk';
import {ApplicationState} from './core/AppState';

export interface SimulationModule {
  reducer: ReducerDefinition[];
  actions: ActionCollection;
  constants: ConstantsCollection;
  functions: FunctionCollection;
  tick: () => ThunkAction<void, ApplicationState, {}>
}

export type ActionCollection = {[name: string]: ActionCreator<any>};

export type ConstantsCollection = {[name: string]: ConstantCollection};

export type FunctionCollection = {[name: string]: Function};
