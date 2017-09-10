import {addResource} from '../actions/resources.actions';

export const buildingManager = {
    produce: (store) => {
        for(let i = 0; i < store.getState().buildings.length; i++) {
            for(let j = 0; j < store.getState().buildings[i].production.length; j++) {
                store.dispatch(addResource(store.getState().buildings[i].production[j]));
            }
        }
    }
};
