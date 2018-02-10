import {Building} from './Building';
import {keys, values} from 'ramda';

export type BuildingState = {[id: string]: Building};

export const getInitialBuildingState = (): BuildingState => ({});

export const getAllBuildingIds = (state: BuildingState): string[] => keys(state);
export const generateBuildingId = (): string => generateBuildingIdFromNumber(Date.now());
export const generateBuildingIdFromNumber = (num: number): string => `buildings#${num}`;
export const getAllBuildings = (state: BuildingState): Building[] => values(state);
