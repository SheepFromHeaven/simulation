import {expect} from 'chai';
import {createResource} from '../ResourceBuilder';
import {RESOURCE_TYPE} from '../constants/RESOURCE_TYPES';
import {substractResources} from './substractResources';

describe('#substractResources', () => {
  it('wont substract two resources of different types', () => {
    const resource1 = createResource().withType(RESOURCE_TYPE.WOOD).build();
    const resource2 = createResource().withType(RESOURCE_TYPE.STONE).build();

    const mergedResources = substractResources(resource1, resource2);

    expect(mergedResources).to.deep.equal([resource1, resource2]);
  });

  it('substracts two resources of same types', () => {
    const resource1 = createResource().withType(RESOURCE_TYPE.WOOD).withAmount(2).build();
    const resource2 = createResource().withType(RESOURCE_TYPE.WOOD).withAmount(1).build();

    const mergedResources = substractResources(resource1, resource2);

    expect(mergedResources).to.have.lengthOf(1);
    expect(mergedResources[0].amount).to.equal(1);
  });

  it('handles undefined', () => {
    const resource1 = createResource().withType(RESOURCE_TYPE.WOOD).withAmount(1).build();

    const mergedResources = substractResources(resource1, undefined);

    expect(mergedResources).to.have.lengthOf(1);
    expect(mergedResources[0].amount).to.equal(1);
  });

});
