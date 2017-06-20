/**
 * @file
 * test file
 */

import {readFileSync} from 'fs';

export default function() {
  try {
    return readFileSync(`${__dirname}/fixture.txt`, {encoding: 'utf-8'});
  } catch (e) { // Change path if we're running the transpiled version
    return readFileSync(`${__dirname}/../fixture.txt`, {encoding: 'utf-8'});
  }
}
