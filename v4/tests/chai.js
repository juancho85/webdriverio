const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const actual = 2;
const expected = 2;

assert.equal(actual, expected);
expect(actual).to.equal(expected);
actual.should.equal(expected);