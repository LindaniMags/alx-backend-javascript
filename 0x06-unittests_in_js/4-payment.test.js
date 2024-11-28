const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("Stub the function Utils.calculateNumber", () => {
    const spy = sinon.spy(Utils);
    const stub = sinon.stub(Utils, "calculateNumber");
    stub.calledWith("SUM", 100, 20).returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(spy.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    expect(spy.log.calledWith("The total is: 10")).to.be.true;
    stub.restore();
    spy.log.restore();
  });
});
