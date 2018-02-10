import {expect} from 'chai';
import * as sinon from 'sinon';
import {mergeReducersFromModules} from './mergeReducersFromModules';
import {SimulationModule} from '../SimulationModule';
import {createSimulationModule} from '../SimulationModule.builder';
import {createReducerDefinition} from '../ReducerDefinition.builder';

describe('#mergeReducersFromModules', () => {
  it('handles empty modules array', () => {
    const reducer = mergeReducersFromModules([]);

    expect(reducer).to.not.have.any.keys;
  });

  it('handles module without reducers', () => {
    const modules: SimulationModule[] = [
      createSimulationModule().build()
    ];
    const reducer = mergeReducersFromModules(modules);

    expect(reducer).to.have.any.keys;
  });

  it('uses key of reducer definition for reducer', () => {
    const modules: SimulationModule[] = [
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducerName')
            .build()
        )
        .build()
    ];
    const reducer = mergeReducersFromModules(modules);

    expect(reducer).to.have.key('reducerName');
  });

  it('sets reducer of reducer definition as value for name', () => {
    const reducerSpy = sinon.spy();
    const modules: SimulationModule[] = [
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducerName')
            .withReducer(reducerSpy)
            .build()
        )
        .build()
    ];
    const reducer = mergeReducersFromModules(modules);
    reducer['reducerName'](()=>{}, {type:''});

    expect(reducerSpy).to.have.been.calledOnce;
  });

  it('sets multiple reducers per module', () => {
    const modules: SimulationModule[] = [
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducerName')
            .build()
        )
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducer2Name')
            .build()
        )
        .build()
    ];
    const reducer = mergeReducersFromModules(modules);

    expect(reducer).to.have.keys('reducerName', 'reducer2Name');
  });

  it('sets multiple reducers from multiple modules', () => {
    const modules: SimulationModule[] = [
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducerName')
            .build()
        )
        .build(),
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducer2Name')
            .build()
        )
        .build()
    ];
    const reducer = mergeReducersFromModules(modules);

    expect(reducer).to.have.keys('reducerName', 'reducer2Name');
  });
});
