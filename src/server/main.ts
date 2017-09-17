import {getInitialState} from '../core/AppState';
import {setup} from '../core/setup';
import {addBuilding} from '../core/buildings/buildings.actions';
import {BLUEPRINTS} from '../core/blueprints';
import {BUILDING_TYPE} from '../core/types/BUILDING_TYPES';
import {startApp} from '../core/game/game.actions';

const store = setup.createReduxStore(getInitialState());
const updateLoop = setup.startUpdateLoop(store, 1000);
store.dispatch(addBuilding(BLUEPRINTS[BUILDING_TYPE.WOODCUTTER]));
store.dispatch(startApp());
