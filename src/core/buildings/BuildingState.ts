import {Building} from '../entities/Building';

export interface BuildingState {
  byId: {[id: string]: Building};
  all: string[];
}

export const getInitialBuildingState = (): BuildingState => ({
  byId: {},
  all: []
});

export const getBuildingById = (state: BuildingState, id: string): Building => state.byId[id];
export const getAllBuildingIds = (state: BuildingState): string[] => state.all;
export const generateBuildingId = (): string => generateBuildingIdFromNumber(Date.now());
export const generateBuildingIdFromNumber = (num: number): string => `buildings#${num}`;
export const getAllBuildings = (state: BuildingState): Building[] => state.all.map(id => state.byId[id]);
