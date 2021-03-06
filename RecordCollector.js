const _ = require('lodash');

const RecordCollector = function(name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
}

RecordCollector.prototype.buyRecord = function(record) {
  if(record.price <= this.wallet){
    this.collection.push(record);
    this.wallet -= record.price;
  }
}

RecordCollector.prototype.sellRecord = function(record, buyer){
  let selling;
  if(this.collection.includes(record) && buyer.wallet >= record.price){
    selling = _.remove(this.collection, function(item){
      return item === record;
    })
  } buyer.collection.push(selling[0]);
}

RecordCollector.prototype.totalValueOfRecords = function(){
  return this.collection.reduce(function(accumulator, record){
    return accumulator += record.price;
  }, 0)
}

RecordCollector.prototype.recordCollectionValueByGenre = function(value){
  let arr = _.filter(this.collection, {genre : value});
  return arr.reduce(function(acc, record){
    return acc += record.price;
  }, 0)
}

RecordCollector.prototype.mostExpensiveRecord = function () {
  return _.maxBy(this.collection, 'price');
}

RecordCollector.prototype.sortCollectionByPrice = function () {
  return _.orderBy(this.collection, ['price'], ['desc']);
}

module.exports = RecordCollector;
