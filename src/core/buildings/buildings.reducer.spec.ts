import {expect} from 'chai';
import {buildings} from './buildings.reducer';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';
import {addBuilding, removeBuilding} from './buildings.actions';
import {BLUEPRINTS} from '../blueprints';
import {getInitialBuildingState} from './BuildingState';

describe('Building reducer', () => {
  it('handles initial state', () => {
    const resultingState = buildings(undefined, {});
    expect(resultingState).to.deep.equal(getInitialBuildingState());
  });

  it('handles addBuilding action', () => {
    const initialState = getInitialBuildingState();
    const action = addBuilding(BLUEPRINTS[BUILDING_TYPE.MAIN]);

    const returnedState = buildings(initialState, action);
    const newBuildingId: string = returnedState.all[0];
    const newBuilding = returnedState.byId[newBuildingId];

    expect(returnedState.all).to.have.lengthOf(1);
    expect(newBuilding.type).to.deep.equal(BUILDING_TYPE.MAIN);
  });

  it('handles removeBuilding action', () => {
    const initialState = getInitialBuildingState();
    const addAction = addBuilding(BLUEPRINTS[BUILDING_TYPE.MAIN]);
    const tempState = buildings(initialState, addAction);

    const removeAction = removeBuilding(tempState.all[0]);

    const returnedState = buildings(tempState, removeAction);

    expect(returnedState.byId).to.be.empty;
    expect(returnedState.all).to.be.empty;
  });
});
