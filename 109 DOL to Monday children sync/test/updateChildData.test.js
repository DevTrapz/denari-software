const expect = require("chai").expect;

const { calc } = require("../UpdateChildData");

describe("calculator", () => {
  it("should return the sum of two positive integers", () => {
    const result = calc(2, 4);
    expect(result).to.equal(6);
  });
});
