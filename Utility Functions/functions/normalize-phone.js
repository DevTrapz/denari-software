module.exports = {
  normalizePhoneNumber,
};

/**
 * Parses a phone number string, strips non-digits, and ensures 11 digits.
 * Defaults to Country Code '1' (US) if only 10 digits are found.
 * * @param {string|number} phone - The raw phone number input
 * @returns {string|null} - The 11-digit number string, or null if invalid
 */
function normalizePhoneNumber(phone) {
  const phoneNums = String(phone).replace(/\D/g, "");

  const basePhoneLength = 10;
  const maxPhoneLength = 15;

  if (phoneNums.length === basePhoneLength) {
    return "1" + phoneNums;
  } else if (
    phoneNums.length >= basePhoneLength + 1 &&
    phoneNums.length <= maxPhoneLength
  ) {
    return phoneNums;
  } else {
    return null;
  }
}
