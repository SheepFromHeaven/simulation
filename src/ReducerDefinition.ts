import {Reducer} from 'redux';

export interface ReducerDefinition {
  name: string;
  reducer: Reducer<any>;
  initialStateGetter: () => Object;
}
