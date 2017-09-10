import {Building} from '../interfaces/Building';

export interface BuildingState {
    byId: {[id: string]: Building};
    all: string[];
}

export const getInitialBuildingState = (): BuildingState => ({
    byId: {},
    all: []
});

export const generateBuildingId = (): string => generateBuildingIdFromNumber(Date.now());
export const generateBuildingIdFromNumber = (num: number): string => `buildings#${num}`;
