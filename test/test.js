var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-zodiac');

describe('next/zodiac', function () {

  it('nx.zodiac 1987  is 兔', function () {
    assert.equal(
      nx.zodiac('1987'), '兔'
    )
  });


  it('nx.zodiac 1988  is 龙', function () {
    assert.equal(
      nx.zodiac('1988'), '龙'
    )
  });

  it('nx.zodiac 2017  is 鸡', function () {
    assert.equal(
      nx.zodiac('2017'), '鸡'
    )
  });

});
