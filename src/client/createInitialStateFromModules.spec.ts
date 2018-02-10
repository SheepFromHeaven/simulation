import {expect} from 'chai';
import * as sinon from 'sinon';
import {createInitialStateFromModules} from './createInitialStateFromModules';
import {createSimulationModule} from '../SimulationModule.builder';
import {createReducerDefinition} from '../ReducerDefinition.builder';
import {SimulationModule} from '../SimulationModule';

describe('#createInitialStateFromModules', () => {
  it('handles empty module array', () => {
    const state = createInitialStateFromModules([]);

    expect(state).to.not.have.any.keys;
  });

  it('handles modules without reducer definition', () => {
    const state = createInitialStateFromModules([
      createSimulationModule().build()
    ]);

    expect(state).to.not.have.any.keys;
  });

  it('sets name of reducer definition as key of state', () => {
    const modules: SimulationModule[] = [
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducerName')
            .build()
        )
        .build()
    ];
    const state = createInitialStateFromModules(modules);

    expect(state).to.have.key('reducerName');
  });

  it('sets initialState of reducer definition as value for name', () => {
    const initialStateGetterSpy = sinon.spy(() => ('test'));
    const modules: SimulationModule[] = [
      createSimulationModule()
        .addReducerDefinition(
          createReducerDefinition()
            .withName('reducerName')
            .withInitialStateGetter(initialStateGetterSpy)
            .build()
        )
        .build()
    ];
    const reducer = createInitialStateFromModules(modules);

    expect(initialStateGetterSpy).to.have.been.calledOnce;
    expect(reducer['reducerName']).to.equal('test');
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
    const reducer = createInitialStateFromModules(modules);

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
    const reducer = createInitialStateFromModules(modules);

    expect(reducer).to.have.keys('reducerName', 'reducer2Name');
  });
});
