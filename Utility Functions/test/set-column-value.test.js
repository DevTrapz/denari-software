const { expect, should } = require("chai");
const { setColumnValue } = require("../functions/set-column-values.js");

const padding = 35;

describe("Unit Test - Set Name Column", () => {
  it("should return the name", () => {
    const type = "name";
    const value = "this is my item";
    const data = setColumnValue(type, value);
    expect(data).to.equal(value);
  });
});

describe("Unit Test - Set Number Column", () => {
  const type = "numbers";
  const testNumbers = [
    { test: 5, result: 5 },
    { test: "2312", result: 2312 },
    { test: 2423.41, result: 2423.41 },
    { test: "873.2", result: 873.2 },
    { test: "two", result: null },
    { test: "2l932p", result: null },
    { test: "", result: null },
  ];

  testNumbers.forEach((number) => {
    it(`${number.test.toString().padEnd(padding)} returns ${
      number.result
    }`, () => {
      expect(setColumnValue(type, number.test)).to.equal(number.result);
    });
  });
});

describe("Unit Test - Set Email Column", () => {
  const type = "email";
  const testEmails = [
    {
      test: "test@example.com",
      result: { email: "test@example.com", text: "test@example.com" },
    },
    {
      test: "jane.doe@company.co.uk",
      result: {
        email: "jane.doe@company.co.uk",
        text: "jane.doe@company.co.uk",
      },
    },
    {
      test: "user-name@domain.io",
      result: { email: "user-name@domain.io", text: "user-name@domain.io" },
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
      result: { email: "oops@gmail.com", text: "oops@gmail.com" },
    },
    {
      test: "student@school,edu",
      result: { email: "student@school.edu", text: "student@school.edu" },
    },
    {
      test: "trailing-spaces@gmail.com  ",
      result: {
        email: "trailing-spaces@gmail.com",
        text: "trailing-spaces@gmail.com",
      },
    },
    {
      test: "   leading-spaces@gmail.com",
      result: {
        email: "leading-spaces@gmail.com",
        text: "leading-spaces@gmail.com",
      },
    },
  ];

  testEmails.forEach((email) => {
    it(`${email.test.toString().padEnd(padding)} returns ${JSON.stringify(
      email.result
    )}`, () => {
      const data = setColumnValue(type, email.test);
      expect(data).to.eql(email.result);
    });
  });
});

describe("Unit Test - Set Date Column", () => {
  const type = "date";
  const testDates = [
    {
      test: "2023-11-24 14:30:00 UTC",
      result: { date: "2023-11-24" },
    },
    {
      test: "2024-01-01",
      result: { date: "2024-01-01" },
    },
    {
      test: "2024-02-29 00:00:00 UTC",
      result: { date: "2024-02-29" },
    },
    {
      test: "not-a-date",
      result: null,
    },
    {
      test: "2023-13-01",
      result: null,
    },
    {
      test: "2023-12-32",
      result: null,
    },
    {
      test: "",
      result: null,
    },
  ];

  testDates.forEach((date) => {
    it(`${date.test.toString().padEnd(padding)} returns ${JSON.stringify(
      date.result
    )}`, () => {
      expect(setColumnValue(type, date.test)).to.eql(date.result);
    });
  });
});

describe("Unit Test - Set Phone Column", () => {
  const type = "phone";
  const phoneNumbers = [
    {
      test: "2932938427",
      result: { phone: "+12932938427" },
    },
    {
      test: "(434) 293-2310",
      result: { phone: "+14342932310" },
    },
    {
      test: "615.555.0199",
      result: { phone: "+16155550199" },
    },
    {
      test: "901-555-0123",
      result: { phone: "+19015550123" },
    },
    {
      test: "1-800-555-0000",
      result: { phone: "+18005550000" },
    },
    {
      test: "+1 (555) 123-4567",
      result: { phone: "+15551234567" },
    },
    {
      test: "447700900077",
      result: { phone: "+447700900077" },
    },

    {
      test: "Phone: (434) 555 0000 ext.",
      result: { phone: "+14345550000" },
    },
    {
      test: "Call me at 555 123 4567 today",
      result: { phone: "+15551234567" },
    },
    {
      test: "555-0199",
      result: null,
    },
    {
      test: "123456789012",
      result: { phone: "+123456789012" },
    },
    {
      test: "",
      result: null,
    },
  ];

  phoneNumbers.forEach((phone) => {
    it(
      `${phone.test}`.padEnd(35) + `returns ${JSON.stringify(phone.result)}`,
      () => {
        expect(setColumnValue(type, phone.test)).to.eql(phone.result);
      }
    );
  });
});

// describe("Unit Test - Set Status Column", () => {
//   const type = "status";
//   const testValues = [
//     {
//       value: "Done",
//       setting: "label",
//     },
//     {
//       value: "Error",
//       setting: "label",
//     },
//     {
//       value: 2,
//       setting: "index",
//     },
//     {
//       value: 0,
//       settings: "Index",
//     },
//   ];

//   const failTestValues = [
//     {
//       value: "Done",
//       setting: "invalidSetting",
//     },
//     {
//       value: 2,
//       setting: "label",
//     },
//     {
//       value: "Not Started",
//       setting: "index",
//     },
//   ];
//   testValues.map((test) => {
//     it(`should return { ${test.label}: ${test.value}}`, () => {
//       const data = setColumnValue(type, test.value, test.setting);
//       expect(data).to.equal({ [test.setting]: test.value });
//     });
//   });
// });
