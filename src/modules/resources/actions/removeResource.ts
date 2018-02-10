import {Resource} from '../Resource';
import {RESOURCE_ACTIONS} from '../constants/RESOURCE_ACTIONS';

export const removeResource = (resource: Resource) => {
  return {
    type: RESOURCE_ACTIONS.REMOVE_RESOURCE,
    payload: {
      resource
    }
  };
};
