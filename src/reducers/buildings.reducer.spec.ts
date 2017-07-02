import {expect} from 'chai';
import {buildings} from './buildings.reducer';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';
import {addBuilding} from '../actions/buildings.actions';
import {getInitialState} from '../state/state';
import {blueprints} from '../blueprints';

describe('Building reducer', () => {
    it('handles initial state', () => {
        expect(buildings(undefined, {})).to.deep.equal([]);
    });

    it('handles addBuilding action state', () => {
        expect(buildings(undefined, addBuilding(blueprints[0]))).to.deep.equal([
            {
                id: 0,
                type: BUILDING_TYPE.MAIN
            }
        ]);
    });

    it('increments building ids', () => {
        let firstState = buildings(getInitialState().buildings, addBuilding(blueprints[0]));
        expect(buildings(firstState, addBuilding(blueprints[0]))[1].id).to.deep.equal(1);
    });
});
