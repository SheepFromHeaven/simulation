import { expect } from 'chai';
import {Building} from './Building';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';

describe('Building', () => {
    it('is created from type', () =>{
      let newBuilding = new Building(BUILDING_TYPE.MAIN);
      expect(newBuilding.type).to.equal(BUILDING_TYPE.MAIN);
    })
    it('has default type when no type parameter passed', () => {
      let newBuilding = new Building();
      expect(newBuilding.type).to.equal(BUILDING_TYPE.MAIN);
    })
    /*xit('can be created with modules', () => {
      let modules: Module[] = ;
      let newBuilding = Building.fromModules(modules);
      expect(newBuilding.modules).to.have.lengthOf(modules);
    })*/
});
