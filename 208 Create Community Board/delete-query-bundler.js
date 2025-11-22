const children = require("./delete-children.json");

let queryGroupSize = 100;

const deleteQuerySnippets = children.map((child, index) => {
  return `
    del${index}: delete_item (item_id: ${child.id}){
      id
    }`;
});

const snippets = [];
let groupSize = parseInt(queryGroupSize);
for (i = 0; i < deleteQuerySnippets.length; i += groupSize) {
  snippets.push(deleteQuerySnippets.slice(0 + i, groupSize + i));
}

const deleteQueries = snippets.map(
  (snippet) => `
  mutation DeleteExtraChildren {
    ${snippet.join("\n    ")}
  }`
);

console.log(deleteQueries[0]);
