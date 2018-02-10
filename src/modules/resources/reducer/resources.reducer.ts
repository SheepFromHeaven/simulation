
import {getInitialResourceState, ResourceState} from '../ResourceState';
import {Reducer} from 'redux';
import {RESOURCE_ACTIONS} from '../constants/RESOURCE_ACTIONS';
import {addResources} from '../functions/addResources';
import {substractResources} from '../functions/substractResources';

export const reducer: Reducer<ResourceState> = (state: ResourceState = getInitialResourceState(), action) => {
  switch (action.type) {
    case RESOURCE_ACTIONS.ADD_RESOURCE:
      return {
        all: addIfNotExist(state.all, action.payload.resource.type),
        byId: {
          ...state.byId,
          [action.payload.resource.type]: addResources(state.byId[action.payload.resource.type], action.payload.resource)[0]
        }
      };
    case RESOURCE_ACTIONS.REMOVE_RESOURCE:
      return {
        all: addIfNotExist(state.all, action.payload.resource.type),
        byId: {
          ...state.byId,
          [action.payload.resource.type]: substractResources(state.byId[action.payload.resource.type], action.payload.resource)[0]
        }
      };
    default:
      return state;
  }
};

const addIfNotExist = (array, item)  => {
  if(array.indexOf(item) === -1) {
    return [
      ...array,
      item
    ];
  }
  return array;
};
