const Decorator = function(paint_stock){
  this.paint_stock = [];
}

Decorator.prototype.addPaint = function(paint){
  this.paint_stock.push(paint)
}
module.exports = Decorator
