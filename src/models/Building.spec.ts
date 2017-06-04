import { expect } from 'chai';
import {Building} from './Building';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';
import {Entity} from './Entity';

describe('Building', () => {
    it('is created with type', ()=>{
      let newBuilding = new Building(BUILDING_TYPE.MAIN);
      expect(newBuilding.type).to.equal(BUILDING_TYPE.MAIN);
    })
    it('has default type when no type parameter passed', ()=> {
      let newBuilding = new Building();
      expect(newBuilding.type).to.equal(BUILDING_TYPE.MAIN);
    })
});
