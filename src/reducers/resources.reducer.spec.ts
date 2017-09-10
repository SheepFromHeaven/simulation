import {expect} from 'chai';
import {resources} from './resources.reducer';
import {getInitialState} from '../state/state';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {addResource, removeResource} from '../actions/resources.actions';
import {getInitialResourceState} from '../state/ResourceState';
import {createResource} from '../builder/ResourceBuilder';

describe('Resources reducer', () => {
    it('handles intitial state', () => {
        const returnedState = resources(undefined, {});
        expect(returnedState).to.deep.equal(getInitialResourceState());
    });

    it('handles addResource action', () => {
        const initialState = getInitialResourceState();
        const resource = createResource()
            .withAmount(10)
            .withType(RESOURCE_TYPE.WOOD)
            .build();
        const action = addResource(resource);

        const newState = resources(initialState, action);

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

        const tempState = resources(initialState, action);
        const newState = resources(tempState, action);

        expect(newState.byId[RESOURCE_TYPE.WOOD].amount).to.equal(20);
        expect(newState.all).to.have.lengthOf(1);
    });

    it('handles removeResource action', () => {
        const initialState = getInitialResourceState();
        const addAction = addResource(createResource().withType(RESOURCE_TYPE.WOOD).withAmount(10).build());
        const tempState = resources(initialState, addAction);

        const action = removeResource(createResource().withType(RESOURCE_TYPE.WOOD).withAmount(5).build());
        const returnedState = resources(tempState, action);

        expect(returnedState.byId[RESOURCE_TYPE.WOOD].amount).to.equal(5);
    });
});
