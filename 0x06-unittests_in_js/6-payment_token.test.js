const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a resolved promise with the object {data: 'Successful response from the API' }", (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({
        data: "Successful response from the API",
      });
      done();
    });
  });
});
