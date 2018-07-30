const assert = require("assert");
const RecordStore = require("../RecordStore.js")
const Record = require("../Record.js")
const RecordCollector = require("../RecordCollector")

describe("RecordStore", function() {
  let recordStore;
  let blackAlbum;
  let readyToDie;
  let nasir;
  let justified;
  let billy;

  beforeEach(function() {
    recordStore = new RecordStore('SuperFly Records', 'Glasgow');
    blackAlbum = new Record("Jay-Z", "The Black Album", "Hip-Hop", 10);
    readyToDie = new Record("Notorious BIG", "Ready to Die", "Hip-Hop", 15);
    nasir = new Record("Nas", "NASIR", "Hip-Hop", 10);
    justified = new Record("Justin Timberlake", "Justified", "R&B", 10);
    billy = new RecordCollector("Billy", 150);
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
    recordStore.addRecord(nasir);
    assert.deepStrictEqual(recordStore.inventory, [blackAlbum, nasir]);
  })

  xit('should be able to sell records', function() {
    recordStore.addRecord(blackAlbum);
    recordStore.addRecord(nasir);
    recordStore.sellRecord(nasir, billy);
    assert.deepStrictEqual(RecordStore.inventory, [blackAlbum]);
    assert.deepStrictEqual(billy.collection, [nasir]);
  })

  xit('should be able to report the financial situation of the store', function () {

  })

  it('should be able to view records by genre', function () {
    recordStore.addRecord(blackAlbum);
    recordStore.addRecord(nasir);
    recordStore.addRecord(justified);
    let actual = recordStore.sortByGenre("Hip-Hop");
    assert.deepStrictEqual(actual, [blackAlbum, nasir]);
  })

})
