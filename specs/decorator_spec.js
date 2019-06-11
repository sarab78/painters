const assert = require("assert")
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room')


describe('Decorator', function(){
  beforeEach(function(){
    decorator = new Decorator()
  })
  it('should have empty paint stock', function(){
    const actual = decorator.paint_stock;
    assert.deepStrictEqual(actual, [])
  })
  describe('paint', function(){
  beforeEach(function(){
    paint = new Paint(10, true)
  })


  it('should able to add can of paint', function(){
    decorator.addPaint(paint)
    const actual = (decorator.paint_stock.length)
    assert.deepStrictEqual(actual, 1)
  })
  it('should be able to calculate total', function(){
    decorator.addPaint(paint)
    decorator.addPaint(paint)
    const actual = (decorator.totalPaint)
    assert.strictEqual(actual, 20)

  })
})
})
