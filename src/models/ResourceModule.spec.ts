import { expect } from 'chai';
import * as sinon from 'sinon';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {ResourceModule} from './ResourceModule';

describe('Resource Module', () => {

  let spy;
  let productionSize = 5;
  let productionInterval = 2;
  let resourceModule: ResourceModule;

  beforeEach(()=> {
    spy = sinon.spy();
    resourceModule = new ResourceModule(RESOURCE_TYPE.WOOD, productionSize, productionInterval, spy)
  })

  it.only('generates resource on update', () => {
      for (let i = 0; i < productionInterval; i++) {
        resourceModule.update();
      }
      expect(spy).to.have.been.calledOnce;
      expect(spy).to.have.been.calledWith(productionSize);
  })
})
