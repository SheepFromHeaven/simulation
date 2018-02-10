import {ReducerDefinition} from '../../../ReducerDefinition';
import {reducer} from './resources.reducer';
import {getInitialResourceState} from '../ResourceState';

export const getReducer = (): ReducerDefinition[] => [
  {
    name: 'resources',
    reducer,
    initialStateGetter: getInitialResourceState
  }
];
