import {expect} from 'chai';
import {resources} from './resources.reducer';
import {getInitialState} from '../state/state';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {addResource, removeResource} from '../actions/resources.actions';

describe('Resources reducer', () => {
    it('handles intitial state', () => {
        expect(resources(undefined, {})).to.deep.equal({});
    });

    it('handles addResource action', () => {
        let newState = resources(getInitialState().resources, addResource({type: RESOURCE_TYPE.WOOD, amount: 10}));
        expect(newState[RESOURCE_TYPE.WOOD]).to.equal(10);
    });

    it('handles addResource action with existing resources', () => {
        let newState = resources(getInitialState().resources, addResource({type: RESOURCE_TYPE.WOOD, amount: 10}));
        newState = resources(newState, addResource({type: RESOURCE_TYPE.WOOD, amount: 10}));
        expect(newState[RESOURCE_TYPE.WOOD]).to.equal(20);
    });

    it('handles removeResource action', () => {
        let filledState = resources(getInitialState().resources, addResource({type: RESOURCE_TYPE.WOOD, amount: 10}));
        expect(resources(filledState, removeResource({type: RESOURCE_TYPE.WOOD, amount: 10}))[RESOURCE_TYPE.WOOD]).to.equal(0);
    });
});
