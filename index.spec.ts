import * as chai from 'chai';
import * as sinon from 'sinon';
import * as fs from 'fs';
import aModule from './';

const should = chai.should();

describe('stubbing aModule', () => {
  describe('normal behaviour', () => {
    it('returns herpa-derpa', () => {
      const result = aModule();
      result.should.equal('herpa-derpa\n');
    });
  });

  describe('stubbed behaviour', () => {
    let readFileSyncStub: sinon.SinonStub;

    // This is where everything dies
    beforeEach(() => {
      readFileSyncStub = sinon.stub(fs, 'readFileSync').returns('boo-urns');
    });

    afterEach(() => {
      readFileSyncStub.restore();
    });

    it('returns boo-urns', () => {
      const result = aModule();
      result.should.equal('boo-urns');
    });
  });
});
