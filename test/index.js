var convert = require('../');
var assert = require('assert');
describe("converting to binary", function() {
  it("converts an empty string", function() {
    assert.equal(convert(''), '');
  });

  it("converts a string", function() {
    assert.equal(convert('hello world'), '0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100');
  });

  it("converts a string with unicode", function() {
    assert.equal(convert('hello 🐐'), '01111000011011100010110100101101011010000110010101101100011011000110111100100000001011010011000100110001001101000011010001100101');
  });
});
