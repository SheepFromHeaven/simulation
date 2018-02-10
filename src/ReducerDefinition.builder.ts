import {ReducerDefinition} from './ReducerDefinition';
import {Reducer} from 'redux';

class ReducerDefinitionBuilder {
  static createReducerDefinition () {
    return new ReducerDefinitionBuilder();
  }

  private REDUCER: Reducer<{}> = () => ({});
  private NAME = '';
  private INITIAL_STATE_GETTER = () => ({});

  withName(name: string) {
    this.NAME = name;
    return this;
  }

  withReducer(reducer: Reducer<{}>) {
    this.REDUCER = reducer;
    return this;
  }

  withInitialStateGetter(initialStateGetter: () => {}) {
    this.INITIAL_STATE_GETTER = initialStateGetter;
    return this;
  }

  build (): ReducerDefinition {
    return {
      reducer: this.REDUCER,
      name: this.NAME,
      initialStateGetter: this.INITIAL_STATE_GETTER
    };
  }
}

export const createReducerDefinition = ReducerDefinitionBuilder.createReducerDefinition;
