import {expect} from 'chai';
import * as sinon from 'sinon';
import {buildingManager} from './building.manager';
import {RESOURCE_TYPE} from "../types/RESOURCE_TYPES";
import {addResource} from "../actions/resources.actions";

describe('Building manager', () => {
  it('makes buildings produce resources', () => {
      let dispatchSpy = sinon.spy();
      let production = {
          type: RESOURCE_TYPE.WOOD,
          amount: 10
      };

      let mockStore = {
          dispatch: dispatchSpy,
          getState: () => {
              return {
                  buildings: [
                      {
                          type: 'MAIN',
                          production: [
                              production
                          ]
                      }
                  ]
              }
          }
      };

      buildingManager.produce(mockStore);

      expect(dispatchSpy).to.have.been.calledOnce;
      expect(dispatchSpy).to.have.been.calledWith(addResource(production));
  });
});
