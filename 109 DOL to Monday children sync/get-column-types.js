const boardColumnData = require("./data/children-board-columns-query.json").data
  .boards[0].columns;

const columnTypes = [...new Set(boardColumnData.map((col) => col.type))];
// console.log(columnTypes);

[
  { name: "value" },
  { text: "value" },
  { status: { label: {} } },
  { date: { date: "2023-06-01" } },
  { numbers: "value" },
];

function setColumnValue(type, value, setting) {
  const setType = {
    name: setName,
    text: setText,
    number: setNumber,
    date: setDate,
    status: setStatus,
    board_relation: setBoardRelation
  };

  return setType[type](value, setting);

  function setName(value) {
    return value;
  }

  function setText(value) {
    return value;
  }

  function setNumber(value) {
    if (Number.isNaN(value)) throw new Error(`Attempted to set a number column to an invalid number: ${value}`)
    return value;
  }

  function setDate(value) {
    const moment = require("moment");

    if (value == null) return;
      const mDate = moment(value, "YYYY-MM-DD HH:mm:ss [UTC]");
    
      if (!mDate.isValid()) return;
      mDate.format("YYYY-MM-DD")
    return {date: value};
  }

  function setStatus(value, setting) {
    const validSettings = ["Label", "Index"];
    if (!validSettings.includes(setting) || setting == null)
      throw new Error(
        `Attempted to set status column value to invalid setting: ${setting}.\nOnly the following setting are allowed: ${validSettings}`
      );

    return { [setting]: value };
  }

  function setBoardRelation(value) {
    if (!Array.isArray(value) && !Number.isSafeInteger(value)) throw new Error(`Attempted to set board relation column to invalid type: ${value}.\nType can either be an integer or an array of integers`)
    if (Array.isArray(value)) {
        const nonNumberFound = value.find((num)=>!Number.isSafeInteger(num))
        if (nonNumberFound) throw new Error(`Attempted to set board relation column to array that does not contain only integers: ${value}`)
    }
    if (Array.isArray(value)) return {item_ids: value}
    return {item_ids: [value] }
  }
}

console.log(setColumnValue("name", "item name"));
