const { donorBoard } = require("./data/board-column-data.json");
const payload = require("./data/data-webhook.json");
const {
  setColumnValue,
} = require("../Utility Functions/functions/set-column-values");

const payloadColumns = Object.entries(payload).map(([key, value]) => ({
  key,
  value: value.toString().trim(),
}));

const columnValues = payloadColumns.reduce((acc, { key, value }) => {
  const mappedColumn = donorBoard.columns.find(
    (column) => column.dolMappedName == key
  );

  if (!mappedColumn || value == "") return acc;

  const columnValue = {
    [mappedColumn.id]: setColumnValue(mappedColumn.type, value),
  };

  return { ...acc, ...columnValue };
}, {});

// console.log(JSON.stringify(columnValues));
console.log(JSON.stringify(donorBoard));
