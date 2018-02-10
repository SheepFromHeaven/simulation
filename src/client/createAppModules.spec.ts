import {expect} from 'chai';
import {createAppModules} from './createAppModules';

describe('#createAppModules', () => {
  it('creates all modules needed', () => {
    const createdModules = createAppModules();

    expect(createdModules).to.have.lengthOf(2);
  });
});
