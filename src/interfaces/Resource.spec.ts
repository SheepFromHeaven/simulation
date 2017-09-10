import {expect} from 'chai';
import {createResource} from '../builder/ResourceBuilder';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {addResources, substractResources} from './Resource';

describe('resource helper', () => {
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

            const mergedResources = addResources(resource1, undefined);

            expect(mergedResources).to.have.lengthOf(1);
            expect(mergedResources[0].amount).to.equal(1);
        });

    });
});
