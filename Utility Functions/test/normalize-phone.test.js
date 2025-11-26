const expect = require("chai").expect;
const { normalizePhoneNumber } = require("../functions/normalize-phone.js");

describe("Unit Test - Normalize Phone", () => {
  const phoneNumbers = [
    {
      test: "2932938427",
      result: "12932938427",
    },
    {
      test: "(434) 293-2310",
      result: "14342932310",
    },
    {
      test: "615.555.0199",
      result: "16155550199",
    },
    {
      test: "901-555-0123",
      result: "19015550123",
    },
    {
      test: "1-800-555-0000",
      result: "18005550000",
    },
    {
      test: "+1 (555) 123-4567",
      result: "15551234567",
    },
    {
      test: "447700900077",
      result: "447700900077",
    },

    {
      test: "Phone: (434) 555 0000 ext.",
      result: "14345550000",
    },
    {
      test: "Call me at 555 123 4567 today",
      result: "15551234567",
    },
    {
      test: "555-0199",
      result: null,
    },
    {
      test: "123456789012",
      result: "123456789012",
    },
    {
      test: "",
      result: null,
    },
  ];

  phoneNumbers.forEach((phone) => {
    it(`${phone.test}`.padEnd(35) + `returns ${phone.result}`, () => {
      expect(normalizePhoneNumber(phone.test)).to.equal(phone.result);
    });
  });
});

// describe("");
