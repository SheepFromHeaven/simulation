import {ReducerDefinition} from '../../../ReducerDefinition';
import reducer from './buildings.reducer';
import {getInitialBuildingState} from '../BuildingState';

export const getReducer = (): ReducerDefinition[] => [
  {
    name: 'buildings',
    reducer,
    initialStateGetter: getInitialBuildingState
  }
];
