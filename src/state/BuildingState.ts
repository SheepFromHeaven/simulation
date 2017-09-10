import {Building} from '../interfaces/Building';
import {Identitfiable} from '../interfaces/Identifiable';

export interface BuildingState {
    byId: {[id: string]: Identitfiable & Building};
    all: string[];
}

export const getInitialBuildingState = (): BuildingState => ({
    byId: {},
    all: []
});

export const generateBuildingId = (): string => generateBuildingIdFromNumber(Date.now());
export const generateBuildingIdFromNumber = (num: number): string => `buildings#${num}`;

export const getAllBuildings = (state: BuildingState): Building[] => state.all.map(id => state.byId[id]);
