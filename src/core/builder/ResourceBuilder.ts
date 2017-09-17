import {RESOURCE_TYPE} from '../types/RESOURCE_TYPES';
import {Resource} from '../entities/Resource';

class ResourceBuilder {
  private RESOURCE_TYPE = RESOURCE_TYPE.WOOD;
  private RESOURCE_AMOUNT = 1;

  static createResource() {
    return new ResourceBuilder();
  }

  withType(type: string) {
    this.RESOURCE_TYPE = type;
    return this;
  }

  withAmount(amount: number) {
    this.RESOURCE_AMOUNT = amount;
    return this;
  }

  build(): Resource {
    return {
      type: this.RESOURCE_TYPE,
      amount: this.RESOURCE_AMOUNT
    };
  }
}

export const createResource = ResourceBuilder.createResource;
