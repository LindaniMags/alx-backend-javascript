const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("SUM with positive numbers", () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 2.7), 4);
  });

  it("SUM with negative numbers", () => {
    assert.strictEqual(calculateNumber("SUM", -1.4, -2.7), -4);
  });

  it("SUBTRACT with positive numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 2.7, 1.4), 2);
  });

  it("SUBTRACT with negative numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", -2.7, -1.4), -2);
  });

  it("DIVIDE with positive numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
  });

  it("DIVIDE with negative numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", -4, -2), 2);
  });

  it("DIVIDE with zero divisor", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 4, 0), "Error");
  });
});
