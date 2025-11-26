const { templateBoardId, mainBoardId, mainBoardColumns, queryGroupSize } = {};

const communityChildrenConnectColumnId = `connect_main_board`;

const initialQuery = `
  create_children_connect_column: create_column (
    board_id: ${templateBoardId} 
    id: "${communityChildrenConnectColumnId}"
    title: "Children Connection"
    column_type: board_relation
    defaults: {
      boardIds: [${mainBoardId}],          
      allowMultipleItems: false,         
      allowCreateReflectionColumn: false
    }
  ) {
    id
  }
`;

const createColumnQuerySnippets = mainBoardColumns
  .filter((column) => column.id !== "name" && column.id !== "subitems")
  .map((column, index) => {
    return `
    col${index}: create_column (
      board_id: ${templateBoardId} ,
      title: "${column.title}",
      column_type: mirror,
      column_id: "${column.id}"
      defaults: {
        relation_column: {
          ${communityChildrenConnectColumnId}: true
        },
        displayed_linked_columns: [
          { 
            board_id: "${mainBoardId}",
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

return {
  createColumnQueries,
};

function groupQueries(queries, groupSize) {
  const snippets = [];
  groupSize = parseInt(groupSize);
  for (i = 0; i < queries.length; i += groupSize) {
    snippets.push(queries.slice(0 + i, groupSize + i));
  }

  return snippets;
}
