"use strict";
/**
 * @file
 * test file
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function default_1() {
    try {
        return fs_1.readFileSync(`${__dirname}/fixture.txt`, { encoding: 'utf-8' });
    }
    catch (e) {
        return fs_1.readFileSync(`${__dirname}/../fixture.txt`, { encoding: 'utf-8' });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map