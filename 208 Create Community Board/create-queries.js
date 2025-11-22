const childrenColumns = require("./children-columns.json");
const children = require("./data-children.json");
const childrenBoardId = 5270328468;
const communityBoardId = 18370799087;
const communityChildrenConnectColumnId = "children_connection";
const queryGroupSize = 15;
const statusItemId = "18370775411";
const communitiesBoardId = "18370775404";
const groupId = "topics";

function groupQueries(queries, groupSize) {
  const snippets = [];
  groupSize = parseInt(groupSize);
  for (i = 0; i < queries.length; i += groupSize) {
    snippets.push(queries.slice(0 + i, groupSize + i));
  }

  return snippets;
}

const initialQuery = `
  create_children_connect_column: create_column (
    board_id: ${communityBoardId}
    id: "${communityChildrenConnectColumnId}"
    title: "Children Connection"
    column_type: board_relation
    defaults: {
      boardIds: [${childrenBoardId}],          
      allowMultipleItems: false,         
      allowCreateReflectionColumn: false
    }
  ) {
    id
  }
  
  update_community_item_status: change_simple_column_value (
    board_id: ${communitiesBoardId}
    column_id: "color_mkvp23g4"
    item_id: ${statusItemId}
    value: "2"
  ) {
    id
  }
  
  update_group_name: update_group (
    board_id: ${communityBoardId},
    group_id: "${groupId}"
    group_attribute: title
    new_value: "Children"
  ) {
    title
  }
  
  update_board_id: change_simple_column_value (
    board_id: ${communitiesBoardId}
    column_id: "text_mkvp89df"
    item_id: ${statusItemId}
    value: "${communityBoardId}"
  ) {
    id
  }
  `;

const createColumnQuerySnippets = childrenColumns.map((column, index) => {
  return `
    col${index}: create_column (
      board_id: ${communityBoardId},
      title: "${column.title}",
      column_type: mirror,
      column_id: "${column.id}"
      defaults: {
        relation_column: {
          ${communityChildrenConnectColumnId}: true
        },
        displayed_linked_columns: [
          { 
            board_id: "${childrenBoardId}",
            column_ids: ["${column.id}"]
          }
        ]
      }
    ) {
      id
    }
    `;
});

const createColumnGroupQuerySnippets = groupQueries(
  createColumnQuerySnippets,
  queryGroupSize
);

const createColumnQueries = createColumnGroupQuerySnippets.map(
  (snippet, index) => {
    return `
    mutation CreateMirrorColumns {
      ${index == 0 ? initialQuery : ""}
      ${snippet.join("")}
      complexity {
        before
        query
        after
      }
    }`;
  }
);

const createChildrenQuerySnippets = children.map((child, index) => {
  const columnValues = JSON.stringify({
    [communityChildrenConnectColumnId]: { item_ids: [child.id] },
  });

  return `
    child${index}: create_item (
      board_id: ${communityBoardId}
      item_name: "${child.name}"
      column_values: ${JSON.stringify(columnValues)}
    ) {
      id
    }
  `;
});

const createChildrenGroupQuerySnippets = groupQueries(
  createChildrenQuerySnippets,
  queryGroupSize
);

const childrenQueries = createChildrenGroupQuerySnippets.map(
  (snippet) => `
  mutation CreateChildren {
    complexity {
        before
        query
        after
      }
    ${snippet.join("")}  
  }`
);

return {
  childrenQueries,
  createColumnQueries,
};
