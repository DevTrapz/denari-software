module.exports = { fixEmailTypos };

/**
 * Attempts to fix an email with a typo
 * @param {String} email
 * @returns {String} fixed email if valid otherwise returns null
 */
function fixEmailTypos(email) {
  email = email.trim().replace(/,(\w{2,4})$/, ".$1");
  const regexEmailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = regexEmailValidator.test(email);
  return isValid ? email : null;
}
