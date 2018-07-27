const assert = require("assert");
const Record = require("../Record.js")
const RecordCollector = require("../RecordCollector.js")

describe("RecordCollector", function() {
  let billy;
  let alfie;
  let blackAlbum;
  let readyToDie;
  let nasir;
  let loud;
  let justified;

  beforeEach(function() {
    billy = new RecordCollector("Billy", 150);
    alfie = new RecordCollector("Alfie", 110);
    blackAlbum = new Record("Jay-Z", "The Black Album", "Hip-Hop", 10);
    readyToDie = new Record("Notorious BIG", "Ready to Die", "Hip-Hop", 15);
    nasir = new Record("Nas", "NASIR", "Hip-Hop", 10);
    loud = new Record("Rihanna", "Loud", "R&B", 5);
    justified = new Record("Justin Timberlake", "Justified", "R&B", 10);
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

  it('should be able to calcualte value of records by genre', function() {
    billy.buyRecord(blackAlbum);
    billy.buyRecord(loud);
    billy.buyRecord(justified);
    let actual = billy.recordCollectionValueByGenre('R&B');
    assert.deepStrictEqual(actual, 15);
  })

  it('should be able to view most expensive record', function() {
    billy.buyRecord(blackAlbum);
    billy.buyRecord(readyToDie);
    let actual = billy.mostExpensiveRecord();
    assert.deepStrictEqual(actual, readyToDie);
  })

  it('should be able to sort records by price', function() {
    billy.buyRecord(loud);
    billy.buyRecord(readyToDie);
    billy.buyRecord(blackAlbum);
    let actual = billy.sortCollectionByPrice();
    let expected = [readyToDie, blackAlbum, loud];
    assert.deepStrictEqual(actual, expected);
  })

  xit('should be able to compare collection', function() {

  })

})
