import { expect } from 'chai';
import {StorageModule} from './StorageModule';
import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';

describe('Storage Module', () => {

    let storageModule: StorageModule;

    beforeEach(()=> {
        storageModule = new StorageModule();
    });

    it('fills storage', () => {
        storageModule.fill({
            type: RESOURCE_TYPE.WOOD,
            amount: 10
        });
        expect(storageModule.get(RESOURCE_TYPE.WOOD)).to.equal(10);
    });

    it('gets resources from storage', () => {
        storageModule.fill({
            type: RESOURCE_TYPE.WOOD,
            amount: 10
        });

        expect(storageModule.remove({
            type: RESOURCE_TYPE.WOOD,
            amount: 5
        })).to.deep.equal({
            type: RESOURCE_TYPE.WOOD,
            amount: 5
        });
    });

    it('removes resources from inventory', () => {
        storageModule.fill({
            type: RESOURCE_TYPE.WOOD,
            amount: 10
        });
        storageModule.remove({
            type: RESOURCE_TYPE.WOOD,
            amount: 5
        });

        expect(storageModule.get(RESOURCE_TYPE.WOOD)).to.equal(5);
    });

    it('does not get more resources than available', () => {
        storageModule.fill({
            type: RESOURCE_TYPE.WOOD,
            amount: 10
        });

        expect(storageModule.remove({
            type: RESOURCE_TYPE.WOOD,
            amount: 11
        })).to.deep.equal({
            type: RESOURCE_TYPE.WOOD,
            amount: 10
        });
        expect(storageModule.get(RESOURCE_TYPE.WOOD)).to.equal(0);
    });
});
