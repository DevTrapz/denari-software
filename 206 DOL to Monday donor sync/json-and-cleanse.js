const webhookData = require("./data/data-webhook.json");
// const { webhookData } = input;

const data = Object.entries(webhookData).reduce((acc, [key, value]) => {
  return { ...acc, [key]: value.toString().trim() };
}, {});

return {
  JSONPayload: JSON.stringify(data),
};
