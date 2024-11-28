const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("sum is rounded", () => {
    assert.strictEqual(calculateNumber(1.4, 2.7), 4);
  });
});
