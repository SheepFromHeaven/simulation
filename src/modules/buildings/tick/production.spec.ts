import {expect} from 'chai';
import {createProduction} from '../ProductionBuilder';
import {getAllProducingProductions, getProducing, shouldProduce} from './production';
import {createBuilding} from '../BuildingBuilder';

describe('production update', () => {
  describe('#shouldProduce', () => {
    it('returns true if production should product this tick', () => {
      const production = createProduction().withInterval(5).build();

      const shouldUpdate = shouldProduce(production, 5);

      expect(shouldUpdate).to.be.true;
    });

    it('returns false if production should not product this tick', () => {
      const production = createProduction().withInterval(5).build();

      const shouldUpdate = shouldProduce(production, 6);

      expect(shouldUpdate).to.be.false;
    });
  });

  describe('#getProducing', () => {
    it('returns productions of building which should produce this tick', () => {
      const production1 = createProduction().withInterval(3).build();
      const production2 = createProduction().withInterval(6).build();
      const production3 = createProduction().withInterval(9).build();
      const building = createBuilding()
        .addProduction(production1)
        .addProduction(production2)
        .addProduction(production3)
        .build();

      const producing = getProducing(building, 6);

      expect(producing).to.have.lengthOf(2);
    });
  });

  describe('#getAllProducingProductions', () => {
    it('returns all productions of buildings which should produce this tick', () => {
      const production1 = createProduction().withInterval(3).build();
      const production2 = createProduction().withInterval(6).build();
      const production3 = createProduction().withInterval(9).build();
      const building1 = createBuilding()
        .addProduction(production1)
        .addProduction(production2)
        .addProduction(production3)
        .build();

      const production4 = createProduction().withInterval(6).build();
      const production5 = createProduction().withInterval(9).build();
      const production6 = createProduction().withInterval(12).build();
      const building2 = createBuilding()
        .addProduction(production4)
        .addProduction(production5)
        .addProduction(production6)
        .build();

      const producing = getAllProducingProductions([building1, building2], 12);

      expect(producing).to.have.lengthOf(4);
    });
  });
});
