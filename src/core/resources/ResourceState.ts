import {Resource} from '../entities/Resource';

export interface ResourceState {
  byId: {[resourceType: string]: Resource};
  all: string[];
}

export const getInitialResourceState = (): ResourceState  => ({
  byId: {},
  all: []
});

export const getAllResources = (state: ResourceState): Resource[] => state.all.map(type => state.byId[type]);
