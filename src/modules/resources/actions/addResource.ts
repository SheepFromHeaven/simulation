import {Resource} from '../Resource';
import {RESOURCE_ACTIONS} from '../constants/RESOURCE_ACTIONS';

export const addResource = (resource: Resource) => {
  return {
    type: RESOURCE_ACTIONS.ADD_RESOURCE,
    payload: {
      resource
    }
  }
};
