const assert = require("assert");
const Record = require("../Record.js")
const RecordCollector = require("../RecordCollector.js")

describe("RecordCollector", function() {
  let billy;
  let alfie;
  let blackAlbum;
  let readyToDie;
  let nasir;

  beforeEach(function() {
    billy = new RecordCollector("Billy", 150);
    alfie = new RecordCollector("Alfie", 110);
    blackAlbum = new Record("Jay-Z", "The Black Album", "Hip-Hop", 10);
    readyToDie = new Record("Notorious BIG", "Ready to Die", "Hip-Hop", 15);
    nasir = new Record("Nas", "NASIR", "Hip-Hop", 10);
  })

  it('should have a name', function() {
    assert.deepStrictEqual(billy.name, "Billy");
  })

  it('should have a wallet', function() {
    assert.deepStrictEqual(billy.wallet, 150);
  })

  it('should have a record collection', function() {
    assert.deepStrictEqual(billy.collection, []);
  })

  it('should be able to buy records with money, if can afford', function() {
    billy.buyRecord(blackAlbum);
    billy.buyRecord(nasir);
    assert.deepStrictEqual(billy.collection, [blackAlbum, nasir]);
    assert.deepStrictEqual(billy.wallet, 130);
  })

  it('should be able to sell records incresing wallet', function() {
    billy.buyRecord(blackAlbum);
    billy.sellRecord(blackAlbum, alfie);
    assert.deepStrictEqual(billy.collection, []);
    assert.deepStrictEqual(alfie.collection, [blackAlbum]);
  })

  it('should be able to calcualte value of collection', function () {
    billy.buyRecord(blackAlbum);
    billy.buyRecord(readyToDie);
    billy.buyRecord(nasir);
    let actual = billy.totalValueOfRecords();
    assert.deepStrictEqual(actual, 35);
  })

  xit('should be able to calcualte value of records by genre', function() {

  })

  xit('should be able to view most expensive record', function() {

  })

  xit('should be able to sort records by price', function() {

  })

  xit('should be able to compare collection', function() {

  })

})
