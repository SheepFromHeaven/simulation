import {Production} from './Production';
import {Resource} from '../resources/Resource';

class ProductionBuilder {
  private RESOURCE: Resource;
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
