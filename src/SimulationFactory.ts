import {Factory} from './interfaces/Factory';
import {EntityManager} from './interfaces/EntityManager';
import GlobalEntityManager from './manager/GlobalEntityManager';

export default class SimulationFactory implements Factory {
    globalEntityManager: EntityManager = null;

    getGlobalEntityManager(): EntityManager {
        if(this.globalEntityManager == null){
            this.globalEntityManager = new GlobalEntityManager();
        }
        return this.globalEntityManager;
    }

}
