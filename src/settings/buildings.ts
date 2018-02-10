import {Building} from '../modules/buildings/Building';
import {BUILDING_TYPE} from '../modules/buildings/constants/BUILDING_TYPES';
import {createBuilding} from '../modules/buildings/BuildingBuilder';
import {createProduction} from '../modules/buildings/ProductionBuilder';
import {RESOURCE_TYPE} from '../modules/resources/constants/RESOURCE_TYPES';
import {createResource} from '../modules/resources/ResourceBuilder';

export const BUILDINGS: {[type: string]: Building} = {
  [BUILDING_TYPE.MAIN]: createBuilding().withType(BUILDING_TYPE.MAIN).build(),
  [BUILDING_TYPE.WOODCUTTER]: createBuilding()
    .withType(BUILDING_TYPE.WOODCUTTER)
    .addProduction(
      createProduction()
        .withResource(
          createResource()
            .withType(RESOURCE_TYPE.WOOD)
            .withAmount(10)
            .build()
        )
        .withInterval(5)
        .build()
    )
    .build()
};
