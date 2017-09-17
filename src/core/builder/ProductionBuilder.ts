import {Resource} from '../entities/Resource';
import {Production} from '../entities/Production';
import {createResource} from './ResourceBuilder';

class ProductionBuilder {
  private RESOURCE = createResource().build();
  private INTERVAL = 1;

  static createProduction() {
    return new ProductionBuilder();
  }

  withResource(resource: Resource) {
    this.RESOURCE = resource;
    return this;
  }

  withInterval(interval: number) {
    this.INTERVAL = interval;
    return this;
  }

  build(): Production {
    return {
      resource: this.RESOURCE,
      interval: this.INTERVAL
    };
  }
}

export const createProduction = ProductionBuilder.createProduction;
