import {isNotNil} from '../fp-helpers';

export interface Resource {
  type: string;
  amount: number;
}

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

export const substractResources = (resource1: Resource, resource2: Resource): Resource[] => {
  if(resource1 && resource2 && resource1.type === resource2.type) {
    return [{
      type: resource1.type,
      amount: resource1.amount - resource2.amount
    }];
  }

  return [
    resource1,
    resource2
  ].filter(isNotNil);
};
