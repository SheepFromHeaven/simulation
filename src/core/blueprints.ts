import {Blueprint} from './entities/Blueprint';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {createResource} from './builder/ResourceBuilder';
import {BUILDINGS} from './buildings/buildings';

export const BLUEPRINTS: {[buildingType: string]: Blueprint} = {
  [BUILDING_TYPE.MAIN]: {
    cost: createResource().withType(RESOURCE_TYPE.WOOD).withAmount(100).build(),
    building: BUILDINGS[BUILDING_TYPE.MAIN]
  },
  [BUILDING_TYPE.WOODCUTTER]: {
    cost: createResource().withType(RESOURCE_TYPE.WOOD).withAmount(10).build(),
    building: BUILDINGS[BUILDING_TYPE.WOODCUTTER]
  }
};

