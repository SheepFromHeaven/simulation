import {Building} from './interfaces/Building';
import {BUILDING_TYPE} from './types/BUILDING_TYPES';
import {createBuilding} from './builder/BuildingBuilder';
import {createProduction} from './builder/ProductionBuilder';
import {createResource} from './builder/ResourceBuilder';
import {RESOURCE_TYPE} from './types/RESOURCE_TYPES';

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
