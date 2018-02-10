import {Blueprint} from '../modules/buildings/Blueprint';
import {BUILDING_TYPE} from '../modules/buildings/constants/BUILDING_TYPES';
import {BUILDINGS} from './buildings';

import {RESOURCE_TYPE} from '../modules/resources/constants/RESOURCE_TYPES';
import {createResource} from '../modules/resources/ResourceBuilder';

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

