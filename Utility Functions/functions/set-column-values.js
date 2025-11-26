const { fixEmailTypos } = require("./validate-email.js");
const { normalizePhoneNumber } = require("./normalize-phone.js");

module.exports = {
  setColumnValue,
};

function setColumnValue(type, value, setting) {
  const setType = {
    name: setName,
    text: setText,
    numbers: setNumber,
    date: setDate,
    status: setStatus,
    board_relation: setBoardRelation,
    email: setEmail,
    phone: setPhone,
  };

  return setType[type](value, setting);

  function setName(value) {
    return value;
  }

  function setText(text) {
    return text;
  }

  function setNumber(number) {
    if (number === null || number === undefined || number === "") return null;

    number = Number(number);
    if (Number.isNaN(number)) return null;
    return number;
  }

  function setDate(date) {
    const moment = require("moment");

    if (date == null) return null;
    const mDate = moment(date, "YYYY-MM-DD HH:mm:ss [UTC]");

    if (!mDate.isValid()) return null;
    date = mDate.format("YYYY-MM-DD");
    return { date: date };
  }

  function setStatus(value, setting) {
    if (!value) return null;
    value = value.toLowerCase();
    const validSettings = ["label", "index"];
    if (!validSettings.includes(setting) || setting == null) return null;

    return { [setting]: value };
  }

  function setBoardRelation(itemIds) {
    if (!Array.isArray(itemIds) && !Number.isSafeInteger(itemIds)) return null;
    if (Array.isArray(itemIds)) {
      const nonNumberFound = itemIds.find((num) => !Number.isSafeInteger(num));
      if (nonNumberFound) return null;
    }
    if (Array.isArray(itemIds)) return { item_ids: itemIds };
    return { item_ids: [itemIds] };
  }

  function setEmail(email) {
    email = fixEmailTypos(email);

    return email ? { email: email, text: email } : null;
  }

  function setPhone(phone) {
    const validPhone = normalizePhoneNumber(phone);

    return validPhone ? { phone: `+${validPhone}` } : null;
  }
}
