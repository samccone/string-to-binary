var convert = require('../');
var assert = require('assert');
describe("converting to binary", function() {
  it("converts an empty string", function() {
    assert.equal(convert(''), '');
  });

  it("converts a string", function() {
    assert.equal(convert('hello world'), '0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100');
  });
});
