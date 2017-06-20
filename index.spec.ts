import * as chai from 'chai';
import * as sinon from 'sinon';
import * as fs from 'fs';
import stupidModule from './';

const should = chai.should();

describe('stubbing this stupidModule', () => {
  describe('normal behaviour', () => {
    it('returns herpa-derpa', () => {
      const result = stupidModule();
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
      const result = stupidModule();
      result.should.equal('boo-urns');
    });
  });


});
