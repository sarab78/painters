const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
  beforeEach(function(){
    paint = new Paint(20, true)
  });
  it('should have paint', function(){
    const actual = paint.amount
    assert.strictEqual(actual, 20)
  });
  it('should be able to check if empty', function(){
    const actual = paint.full
    assert.strictEqual(actual, true)
  })
  it('should be able to empty itself of paint', function(){
    paint.empty();
    const actual = paint.full
    assert.strictEqual(actual, false)
  })
});
