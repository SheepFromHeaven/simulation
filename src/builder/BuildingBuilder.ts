import {BUILDING_TYPE} from '../types/BUILDING_TYPES';
import {Building} from '../interfaces/Building';
import {Production} from '../interfaces/Production';

class BuildingBuilder {
    private TYPE = BUILDING_TYPE.MAIN;
    private PRODUCTION = [];

    static createBuilding() {
        return new BuildingBuilder();
    }

    withType(type: string) {
        this.TYPE = type;
        return this;
    }

    addProduction(production: Production) {
        this.PRODUCTION.push(production);
        return this;
    }

    build(): Building {
        return {
            type: this.TYPE,
            productions: this.PRODUCTION
        };
    }
}

export const createBuilding = BuildingBuilder.createBuilding;
