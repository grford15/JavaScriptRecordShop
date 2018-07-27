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

// RecordStore.prototype.listInventory = function() {
//   return this.inventory;
// }

module.exports = RecordStore;
