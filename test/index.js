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
    assert.equal(convert('hello 🐐'), '01101000011001010110110001101100011011110010000011110000100111111001000010010000');
  });
});
