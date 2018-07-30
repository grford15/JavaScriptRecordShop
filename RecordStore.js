const _ = require('lodash');

const RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 500;
}

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.sortByGenre = function (genre) {
  return _.filter(this.inventory, {'genre' : genre})
}

RecordStore.prototype.sellRecord = function (record, buyer){
  let newRecord;
  if(buyer.wallet >= record.price){
    newRecord = _.remove(this.inventory, function(item){
      return item === record;
    });

  } buyer.collection.push(newRecord[0]);
}

module.exports = RecordStore;
