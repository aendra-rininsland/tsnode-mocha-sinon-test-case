"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const _1 = require("./");
const should = chai.should();
describe('stubbing this stupidModule', () => {
    describe('normal behaviour', () => {
        it('returns herpa-derpa', () => {
            const result = _1.default();
            result.should.equal('herpa-derpa\n');
        });
    });
    describe('stubbed behaviour', () => {
        let readFileSyncStub;
        // This is where everything dies
        beforeEach(() => {
            readFileSyncStub = sinon.stub(fs, 'readFileSync').returns('boo-urns');
        });
        afterEach(() => {
            readFileSyncStub.restore();
        });
        it('returns boo-urns', () => {
            const result = _1.default();
            result.should.equal('boo-urns');
        });
    });
});
//# sourceMappingURL=index.spec.js.map