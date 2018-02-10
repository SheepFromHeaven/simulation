import {Resource} from '../Resource';
import {isNotNil} from '../../../core/fp-helpers';

export const addResources = (resource1: Resource, resource2: Resource): Resource[] => {
  if(resource1 && resource2 && resource1.type === resource2.type) {
    return [{
      type: resource1.type,
      amount: resource1.amount + resource2.amount
    }];
  }

  return [
    resource1,
    resource2
  ].filter(isNotNil);
};