import {expect} from 'chai';
import {reducer} from './resources.reducer';
import {RESOURCE_TYPE} from '../constants/RESOURCE_TYPES';
import {getInitialResourceState} from '../ResourceState';
import {createResource} from '../ResourceBuilder';
import {addResource} from '../actions/addResource';
import {removeResource} from '../actions/removeResource';

describe('Resources reducer', () => {
  it('handles intitial state', () => {
    const returnedState = reducer(undefined, {type: ''});
    expect(returnedState).to.deep.equal(getInitialResourceState());
  });

  it('handles addResource action', () => {
    const initialState = getInitialResourceState();
    const resource = createResource()
      .withAmount(10)
      .withType(RESOURCE_TYPE.WOOD)
      .build();
    const action = addResource(resource);

    const newState = reducer(initialState, action);

    expect(newState.byId[RESOURCE_TYPE.WOOD]).to.equal(resource);
    expect(newState.all).to.contain(RESOURCE_TYPE.WOOD);
  });

  it('handles addResource action with existing resources', () => {
    const initialState = getInitialResourceState();
    const resource = createResource()
      .withAmount(10)
      .withType(RESOURCE_TYPE.WOOD)
      .build();

    const action = addResource(resource);

    const tempState = reducer(initialState, action);
    const newState = reducer(tempState, action);

    expect(newState.byId[RESOURCE_TYPE.WOOD].amount).to.equal(20);
    expect(newState.all).to.have.lengthOf(1);
  });

  it('handles removeResource action', () => {
    const initialState = getInitialResourceState();
    const addAction = addResource(createResource().withType(RESOURCE_TYPE.WOOD).withAmount(10).build());
    const tempState = reducer(initialState, addAction);

    const action = removeResource(createResource().withType(RESOURCE_TYPE.WOOD).withAmount(5).build());
    const returnedState = reducer(tempState, action);

    expect(returnedState.byId[RESOURCE_TYPE.WOOD].amount).to.equal(5);
  });
});
