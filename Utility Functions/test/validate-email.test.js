const expect = require("chai").expect;
const { fixEmailTypos } = require("../functions/validate-email.js");

describe("Unit Test - Fix Email Typos", () => {
  const testEmails = [
    {
      test: "test@example.com",
      result: "test@example.com",
    },
    {
      test: "jane.doe@company.co.uk",
      result: "jane.doe@company.co.uk",
    },
    {
      test: "user-name@domain.io",
      result: "user-name@domain.io",
    },
    {
      test: "invalid-email",
      result: null,
    },
    {
      test: "user@domain",
      result: null,
    },
    {
      test: "user@domain.c",
      result: null,
    },
    {
      test: "oops@gmail,com",
      result: "oops@gmail.com",
    },
    {
      test: "student@school,edu",
      result: "student@school.edu",
    },
    {
      test: "trailing-spaces@gmail.com  ",
      result: "trailing-spaces@gmail.com",
    },
    {
      test: "   leading-spaces@gmail.com",
      result: "leading-spaces@gmail.com",
    },
  ];

  testEmails.forEach((email) => {
    it(`${email.test.toString().padEnd(35)} returns ${email.result}`, () => {
      expect(fixEmailTypos(email.test)).to.equal(email.result);
    });
  });
});
