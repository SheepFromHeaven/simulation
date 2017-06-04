import {Entity} from './Entity';
import {BUILDING_TYPE} from '../types/BUILDING_TYPES';

export class Building extends Entity{
    public type: BUILDING_TYPE;

    constructor (type: BUILDING_TYPE = BUILDING_TYPE.MAIN) {
      super();
      this.type = type;
    }

}
