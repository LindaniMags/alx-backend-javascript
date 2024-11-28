const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToAPI", function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it("should call sendPaymentRequestToAPI with 100 and 20 and logs total", function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
  });

  it("should call sendPaymentRequestToAPI with 10 and 10 and logs total", function () {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 20")).to.be.true;
  });
});
