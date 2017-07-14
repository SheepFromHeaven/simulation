import {expect} from 'chai';
import {buildings} from './buildings.reducer';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';
import {addBuilding} from '../actions/buildings.actions';
import {removeBuilding} from '../actions/buildings.actions';
import {getInitialState} from '../state/state';
import {blueprints} from '../blueprints';

describe('Building reducer', () => {
    it('handles initial state', () => {
        expect(buildings(undefined, {})).to.deep.equal([]);
    });

    it('handles addBuilding action', () => {
        expect(buildings(undefined, addBuilding(blueprints[BUILDING_TYPE.MAIN]))).to.deep.equal([
            {
                id: 0,
                type: BUILDING_TYPE.MAIN
            }
        ]);
    });

    it('increments building ids', () => {
        let firstState = buildings(getInitialState().buildings, addBuilding(blueprints[BUILDING_TYPE.MAIN]));
        expect(buildings(firstState, addBuilding(blueprints[BUILDING_TYPE.MAIN]))[1].id).to.deep.equal(1);
    });

    it('handles removeBuilding action', () => {
        let firstState = buildings(getInitialState().buildings, addBuilding(blueprints[BUILDING_TYPE.MAIN]));
        let stateWithRemovedBuilding = buildings(firstState, removeBuilding(0));
        expect(stateWithRemovedBuilding).to.deep.equal(getInitialState().buildings);
    });
});
