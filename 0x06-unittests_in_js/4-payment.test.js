const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", () => {
  it("Stub the function Utils.calculateNumber", () => {
    const spy = sinon.spy(console);
    const stub = sinon.stub(Utils, "calculateNumber");

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;
    expect(spy.log.calledWith("The total is: 10")).to.be.true;
    stub.restore();
    spy.log.restore();
  });
});
