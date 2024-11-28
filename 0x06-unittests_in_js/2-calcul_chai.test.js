const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber task2", () => {
  it("SUM with positive numbers", () => {
    expect(calculateNumber("SUM", 1.4, 2.7)).to.equal(4);
  });

  it("SUM with negative numbers", () => {
    expect(calculateNumber("SUM", -1.4, -2.7)).to.equal(-4);
  });

  it("SUBTRACT with positive numbers", () => {
    expect(calculateNumber("SUBTRACT", 2.7, 1.4)).to.equal(2);
  });

  it("SUBTRACT with negative numbers", () => {
    expect(calculateNumber("SUBTRACT", -2.7, -1.4)).to.equal(-2);
  });

  it("DIVIDE with positive numbers", () => {
    expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
  });

  it("DIVIDE with negative numbers", () => {
    expect(calculateNumber("DIVIDE", -4, -2)).to.equal(2);
  });

  it("DIVIDE with zero divisor", () => {
    expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
  });
});
