var assert = require('assert');


let {
	firstCutAvergeWightValue ,
	numberOfTwelveMeterProductForEachBilletValue ,
	eachTwelveMeterProductWeightValue
	
} = require('./assets/js/code');




describe('BLC Test', function () {
  it('Perti Percentage', function () {
    assert.equal(firstCutAvergeWightValue - ( numberOfTwelveMeterProductForEachBilletValue * eachTwelveMeterProductWeightValue ), sumOfPerti());
  });
});
