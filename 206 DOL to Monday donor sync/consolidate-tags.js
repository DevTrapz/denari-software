const globalTags = [
  {
    id: "4628996",
    name: "Testing",
  },
  {
    id: "4844068",
    name: "SLG5000+(L)",
  },
  {
    id: "4844070",
    name: "SLG10000+(L)",
  },
  {
    id: "4844082",
    name: "SLG25000+(L)",
  },
  {
    id: "4844083",
    name: "CNT200+(L)",
  },
  {
    id: "4844084",
    name: "TOT10000+(L)",
  },
  {
    id: "4844085",
    name: "TOT25000+(L)",
  },
  {
    id: "4844086",
    name: "TOT50000+(L)",
  },
  {
    id: "4844087",
    name: "TOT100000+(L)",
  },
  {
    id: "4844088",
    name: "SLG5000+(C)",
  },
  {
    id: "4844089",
    name: "SLG10000+(C)",
  },
  {
    id: "4844090",
    name: "SLG25000+(C)",
  },
  {
    id: "4844091",
    name: "CNT200+(C)",
  },
  {
    id: "4844092",
    name: "Tot10000+(C)",
  },
  {
    id: "4844093",
    name: "TOT25000+(C)",
  },
  {
    id: "4844094",
    name: "TOT50000+(C)",
  },
  {
    id: "4844095",
    name: "TOT100000+(C)",
  },
  {
    id: "4844096",
    name: "SLG5000+(P)",
  },
  {
    id: "4844097",
    name: "SLG10000+(P)",
  },
  {
    id: "4844098",
    name: "SLG25000+(P)",
  },
  {
    id: "4844099",
    name: "CNT200+(P)",
  },
  {
    id: "4844100",
    name: "TOT10000+(P)",
  },
  {
    id: "4844101",
    name: "TOT25000+(P)",
  },
  {
    id: "4844102",
    name: "TOT50000+(P)",
  },
  {
    id: "4844103",
    name: "TOT100000+(P)",
  },
  {
    id: "4844104",
    name: "SLG5000+(S)",
  },
  {
    id: "4844105",
    name: "SLG10000+(S)",
  },
  {
    id: "4844106",
    name: "SLG25000+(S)",
  },
  {
    id: "4844107",
    name: "CNT200+(S)",
  },
  {
    id: "4844108",
    name: "TOT10000+(S)",
  },
  {
    id: "4844109",
    name: "TOT25000+(S)",
  },
  {
    id: "4844110",
    name: "TOT50000+(S)",
  },
  {
    id: "4844111",
    name: "TOT100000+(S)",
  },
  {
    id: "4844112",
    name: "SLG5000+(H)",
  },
  {
    id: "4844114",
    name: "SLG10000+(H)",
  },
  {
    id: "4844115",
    name: "SLG25000+(H)",
  },
  {
    id: "4844116",
    name: "CNT200+(H)",
  },
  {
    id: "4844117",
    name: "TOT10000+(H)",
  },
  {
    id: "4844118",
    name: "SLG",
  },
  {
    id: "4844119",
    name: "TOT25000+(H)",
  },
  {
    id: "4844120",
    name: "TOT50000+(H)",
  },
  {
    id: "4844121",
    name: "TOT100000+(H)",
  },
  {
    id: "4844122",
    name: "SLG5000+(T)",
  },
  {
    id: "4844123",
    name: "SLG10000+(T)",
  },
  {
    id: "4844124",
    name: "SLG25000+(T)",
  },
  {
    id: "4844125",
    name: "CNT200+(T)",
  },
  {
    id: "4844126",
    name: "TOT10000+(T)",
  },
  {
    id: "4844127",
    name: "TOT25000+(T)",
  },
  {
    id: "4844128",
    name: "TOT50000+(T)",
  },
  {
    id: "4844129",
    name: "TOT100000+(T)",
  },
  {
    id: "4854417",
    name: "DoNotCommunicate",
  },
];

const donorTagIdsJSON = '{"tag_ids":[4844088]}';

const webhookTagNames = "DoNotCommunicate, TOT100000+(T)";

const webhookTagIds = webhookTagNames.split(",").reduce((acc, tagName) => {
  const webhookTagId = globalTags.find((tag) => tag.name == tagName.trim()).id;

  return webhookTagId ? [...acc, Number(webhookTagId)] : acc;
}, []);

const donorTagIds = JSON.parse(donorTagIdsJSON).tag_ids;

const columnValue = {
  tag_ids: [...new Set([...donorTagIds, ...webhookTagIds])],
};

console.log(columnValue);

return {
  columnValue: JSON.stringify(JSON.stringify(columnValue)),
};
