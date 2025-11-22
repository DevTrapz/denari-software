const testEmails = require("./data-test-emails.json");

function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

function fixEmailTypos(email) {
  return email.replace(/,(\w{2,4})$/, ".$1");
}

testEmails.forEach((email) => {
  email = fixEmailTypos(email);
  const isValid = validateEmail(email);
  console.log(`'${email}' is ${isValid ? "✅ Valid" : "❌ Invalid"}`);
});
