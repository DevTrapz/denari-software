const jsonPayload = require("./JsonData.json");
const moment = require("moment");

const { data } = jsonPayload;

const textColumnIds = {
  ["Child First"]: "text3",
  ["Child Last"]: "text9",
  ["Community Code"]: "text5",
  ["comp_ref"]: "text",
  ["spons_ref"]: "text7",
  ["Child Code"]: "text17",
  ["Photo URL"]: "text38",
  ["Brothers"]: "numbers",
  ["Sisters"]: "numbers8",
};

const statusColumns = {
  ["On Hold"]: {
    id: "status77",
    type: "status",
    index: {
      0: 0,
      no: 1,
      yes: 2,
      1: 3,
      "": 5,
    },
  },
  ["Child Status"]: {
    id: "status",
    type: "status",
    index: {
      a: 1,
      as: 4,
      s: 5,
      ap: 7,
      d: 8,
      "": 5,
    },
  },
  ["Eligible for Sponsor"]: {
    id: "color",
    type: "status",
    index: {
      yes: 1,
      no: 0,
    },
  },
};

const dateColumnIds = {
  ["Birth Date"]: "date04",
};

function getStatusColumnValue(statusColumn, statusValue) {
  statusValue = statusValue.toLowerCase();

  if (!statusColumn.index.hasOwnProperty(statusValue)) return;
  return { index: statusColumn["index"][statusValue] };
}

function getDateColumnValue(date) {
  if (date == null) return;
  const mDate = moment(date, "YYYY-MM-DD HH:mm:ss [UTC]");

  if (!mDate.isValid()) return;
  return mDate.format("YYYY-MM-DD");
}

const newTextColumnValues = {
  name: data["Child_Full_Name"],
  [textColumnIds["Child First"]]: data["Child_First"],
  [textColumnIds["Child Last"]]: data["Child_Last"],
  [textColumnIds["comp_ref"]]: data["Comp_Ref"],
  [textColumnIds["Community Code"]]: data["Community"],
  [textColumnIds["spons_ref"]]: data["spons_ref"],
  [textColumnIds["Photo URL"]]: data["Image_URL"],
  [textColumnIds["Child Code"]]: data["Child_Code"],
  [textColumnIds["Brothers"]]: data["Number_of_Brothers"],
  [textColumnIds["Sisters"]]: data["Number_of_Sisters"],
};

const newStatusColumnValues = {
  [statusColumns["Child Status"]["id"]]: getStatusColumnValue(
    statusColumns["Child Status"],
    data["Child_Status"]
  ),
  [statusColumns["Eligible for Sponsor"]["id"]]: getStatusColumnValue(
    statusColumns["Eligible for Sponsor"],
    data["eSponsor"]
  ),
  [statusColumns["On Hold"]["id"]]: getStatusColumnValue(
    statusColumns["On Hold"],
    data["On_Hold"]
  ),
};

const newDateColumnValues = {
  [dateColumnIds["Birth Date"]]: getDateColumnValue(data["Birth_Date"]),
};

const newColumnValues = {
  ...newTextColumnValues,
  ...newStatusColumnValues,
  ...newDateColumnValues,
};

for (const [key, value] of Object.entries(newColumnValues)) {
  if (value == null) delete newColumnValues[key];
}

return {
  newColumnValues: JSON.stringify(JSON.stringify(newColumnValues)),
};
