const assert = require("assert");
const RecordStore = require("../RecordStore.js")
const Record = require("../Record.js")

describe("RecordStore", function() {
  let recordStore;
  let blackAlbum;

  beforeEach(function() {
    recordStore = new RecordStore('SuperFly Records', 'Glasgow');
    blackAlbum = new Record("Jay-Z", "The Black Album", "Hip-Hop", 10);
  })

  it('should have a name', function() {
    assert.deepStrictEqual(recordStore.name, 'SuperFly Records');
  })

  it('should have a City', function() {
    assert.deepStrictEqual(recordStore.city, 'Glasgow');
  })

  it('should have an inventory', function () {
    assert.deepStrictEqual(recordStore.inventory, []);
  })

  it('should have a balance', function() {
    assert.deepStrictEqual(recordStore.balance, 500);
  })

  it('should be able to add records to inventory', function () {
    recordStore.addRecord(blackAlbum);
    assert.deepStrictEqual(recordStore.inventory, [blackAlbum]);
  })

  xit('should be able to list the inventory as a string', function() {
    recordStore.addRecord(blackAlbum);
    let actual = recordStore.listInventory();
    console.log(actual);
    let expected = "Jay-Z, The Black Album, Hip-Hop, 10";
    assert.deepStrictEqual(actual, expected);
  })

  xit('should be able to sell records', function() {

  })

  xit('should be able to report the financial situation of the store', function () {

  })

  xit('should be able to view records by genre', function () {

  })

})
