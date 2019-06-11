const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
  beforeEach(function(){
    room = new Room(250)
  })
it('should have a area', function(){
  const actual = room.area;
  assert.strictEqual(actual, 250);
});
it('should start not painted', function(){
  const actual = room.painted;
  assert.strictEqual(actual, false);
})
it('should be able to be painted', function(){
  room.paint()
  const actual = room.painted;
  assert.strictEqual(actual, true);

})
})
