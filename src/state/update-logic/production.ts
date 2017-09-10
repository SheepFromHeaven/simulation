import {ApplicationState} from '../state';
import {Production} from '../../interfaces/Production';
import {getAllBuildings} from '../BuildingState';
import {Building} from '../../interfaces/Building';
import {addResource} from '../../actions/resources.actions';

export const updateProduction = (dispatch, state: ApplicationState) => {
    const ticks = state.game.ticksPassed;
    const buildings = getAllBuildings(state.buildings);

    const productions = getAllProducingProductions(buildings, ticks);

    const resources = productions.map(production => production.resource);

    resources.forEach(resource => {
        dispatch(addResource(resource));
    });
};

export const getAllProducingProductions = (buildings: Building[], ticks: number): Production[] => {
    return buildings.reduce(
        (prevArr, building) => {
            return [
                ...prevArr,
                ...getProducing(building, ticks)
            ]
        }, []);
};
export const getProducing = (building: Building, ticks: number): Production[] => building.productions.filter(production => shouldProduce(production, ticks));
export const shouldProduce = (production: Production, ticks: number): boolean => ticks % production.interval === 0;
