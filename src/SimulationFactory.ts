import {Factory} from './Factory';
import {EntityManager} from './EntityManager';
import GlobalEntityManager from './GlobalEntityManager';

export default class SimulationFactory implements Factory {
    globalEntityManager: EntityManager = null;

    getGlobalEntityManager(): EntityManager {
        if(this.globalEntityManager == null){
            this.globalEntityManager = new GlobalEntityManager();
        }
        return this.globalEntityManager;
    }

}
