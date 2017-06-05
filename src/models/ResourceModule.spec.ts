import { expect } from 'chai';
import * as sinon from 'sinon';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {ResourceModule} from './ResourceModule';
import {Resource} from '../interfaces/Resource';

describe('Resource Module', () => {

  let spy;
  let productionSize = 5;
  let productionInterval = 2;
  let resourceModule: ResourceModule;
  let resource: Resource = {type: RESOURCE_TYPE.WOOD, amount: productionSize};

  beforeEach(()=> {
    spy = sinon.spy();
    resourceModule = new ResourceModule(resource, productionInterval, spy);
  })

  it('generates resource on update', () => {
      for (let i = 0; i < productionInterval; i++) {
        resourceModule.update();
      }
      expect(spy).to.have.been.calledOnce;
      expect(spy).to.have.been.calledWith(resource);
  })
})
