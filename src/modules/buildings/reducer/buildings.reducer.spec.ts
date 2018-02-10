import {expect} from 'chai';
import buildings from './buildings.reducer';
import {BUILDING_TYPE} from '../constants/BUILDING_TYPES';
import {BLUEPRINTS} from '../../../settings/blueprints';
import {getAllBuildingIds, getInitialBuildingState} from '../BuildingState';
import {addBuilding} from '../actions/addBuilding';
import {removeBuilding} from '../actions/removeBuilding';

describe('Building reducer', () => {
  it('handles initial state', () => {
    const resultingState = buildings(undefined, {});
    expect(resultingState).to.deep.equal(getInitialBuildingState());
  });

  it('handles addBuilding action', () => {
    const initialState = getInitialBuildingState();
    const action = addBuilding(BLUEPRINTS[BUILDING_TYPE.MAIN]);

    const returnedState = buildings(initialState, action);
    const newBuildingId: string = Object.keys(returnedState)[0];
    const newBuilding = returnedState[newBuildingId];

    expect(Object.keys(returnedState)).to.have.lengthOf(1);
    expect(newBuilding.type).to.deep.equal(BUILDING_TYPE.MAIN);
  });

  it('handles removeBuilding action', () => {
    const initialState = getInitialBuildingState();
    const addAction = addBuilding(BLUEPRINTS[BUILDING_TYPE.MAIN]);
    const tempState = buildings(initialState, addAction);

    const removeAction = removeBuilding(getAllBuildingIds(tempState)[0]);

    const returnedState = buildings(tempState, removeAction);

    expect(returnedState).to.be.empty;
  });
});
