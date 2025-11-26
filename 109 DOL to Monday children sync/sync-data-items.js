const data = require("./data/webhook-test-data.json").JSONPayload;
const boardColumnData = require("./data/children-board-columns-query.json").data
  .boards[0].columns;

const columnsToSync = Object.entries(data).map(([key, value]) => ({
  [standardizedName(key)]: value,
}));

const boardColumnNames = boardColumnData.map((column) =>
  standardizedName(column.title)
);

const columnValues = columnsToSync.filter((column) => {
  const columnName = Object.keys(column)[0];

  return hasSubString(boardColumnNames, columnName);
});

function standardizedName(name) {
  return name.split("_").join(" ").toLowerCase();
}

/**
 *
 * @param {[]} arrStrs
 * @param {String} subStr
 * @returns
 */
function hasSubString(arrStrs, subStr) {
  const foundStr = arrStrs.find((str) => {
    return str.includes(subStr);
  });
  return Boolean(foundStr);
}

console.log(columnValues.length);
