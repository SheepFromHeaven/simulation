import {Resource} from './Resource';
import {Building} from './Building';

export interface Blueprint {
    building: Building;
    cost: Resource
}
