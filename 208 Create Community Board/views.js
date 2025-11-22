// const views = require("./data-views.json");
// const view = views.data.boards[0].views[0];
const view = {
  settings: {
    columns: {
      name: {
        visible: true,
        question: "Name",
        type: "name",
        required: false,
        forceRequired: false,
        mandatory: false,
      },
    },
  },
};

// delete view["name"];
// delete view["type"];
const sort = view;

console.log(JSON.stringify(JSON.stringify(sort)));
