const Paint = function(amount, full){
  this.amount = amount;
  this.full = full;
};

Paint.prototype.empty = function(){
  this.full = false;
};

module.exports = Paint;
