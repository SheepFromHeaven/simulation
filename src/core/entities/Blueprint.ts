import {Resource} from './Resource';
import {Building} from './Building';

export interface Blueprint {
  cost: Resource;
  building: Building;
}
