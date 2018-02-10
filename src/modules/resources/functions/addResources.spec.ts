import {expect} from 'chai';
import {createResource} from '../ResourceBuilder';
import {RESOURCE_TYPE} from '../constants/RESOURCE_TYPES';
import {addResources} from './addResources';

describe('#addResources', () => {
  it('wont add two resources of different types', () => {
    const resource1 = createResource().withType(RESOURCE_TYPE.WOOD).build();
    const resource2 = createResource().withType(RESOURCE_TYPE.STONE).build();

    const mergedResources = addResources(resource1, resource2);

    expect(mergedResources).to.deep.equal([resource1, resource2]);
  });

  it('adds two resources of same types', () => {
    const resource1 = createResource().withType(RESOURCE_TYPE.WOOD).withAmount(1).build();
    const resource2 = createResource().withType(RESOURCE_TYPE.WOOD).withAmount(1).build();

    const mergedResources = addResources(resource1, resource2);

    expect(mergedResources).to.have.lengthOf(1);
    expect(mergedResources[0].amount).to.equal(2);
  });

  it('handles undefined', () => {
    const resource1 = createResource().withType(RESOURCE_TYPE.WOOD).withAmount(1).build();

    const mergedResources = addResources(resource1, undefined);

    expect(mergedResources).to.have.lengthOf(1);
    expect(mergedResources[0].amount).to.equal(1);
  });

});
