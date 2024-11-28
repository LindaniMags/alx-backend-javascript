const request = require("request");
const { expect } = require("chai");

describe("Regex integration testing", () => {
  const URL = "http://localhost:7865";

  it("should return correct status code and results", (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("id must be only a number", (done) => {
    request.get(`${URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 12");
      done();
    });
  });

  it("id should be a positive number", (done) => {
    request.get(`${URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it("should be a valid integer", (done) => {
    request.get(`${URL}/cart/ascfsa-sad-sd`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
