import {expect} from 'chai';
import {buildings} from './buildings.reducer';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';
import {addBuilding} from '../actions/buildings.actions';
import {getInitialState} from '../state/state';

describe('Building reducer', () => {
    it('handles initial state', () => {
        expect(buildings(undefined, {})).to.deep.equal([]);
    });

    it('handles addBuilding action state', () => {
        expect(buildings(undefined, addBuilding(BUILDING_TYPE.MAIN))).to.deep.equal([
            {
                id: 0,
                type: BUILDING_TYPE.MAIN
            }
        ]);
    });

    it('increments building ids', () => {
        let firstState = buildings(getInitialState().buildings, addBuilding(BUILDING_TYPE.MAIN));
        expect(buildings(firstState, addBuilding(BUILDING_TYPE.MAIN))[1].id).to.deep.equal(1);
    });
});
