const assert = require("assert");
const Record = require("../Record.js")

describe("Record", function() {
  let record;

  beforeEach(function() {
    record = new Record("Jay-Z", "The Black Album", "Hip-Hop", 10);
  })

  it('should have an Artists', function() {
    assert.deepStrictEqual(record.artist, "Jay-Z")
  })

  it('should have a title', function() {
    assert.deepStrictEqual(record.title, "The Black Album")
  })

  it('should have a genre', function() {
    assert.deepStrictEqual(record.genre, "Hip-Hop")
  })

  it('should have a price', function() {
    assert.deepStrictEqual(record.price, 10)
  })

  it('should print the properties as a string', function() {
    let expected = "Jay-Z, The Black Album, Hip-Hop, 10";
    assert.deepStrictEqual(record.printProperties(), expected);
  })



})
