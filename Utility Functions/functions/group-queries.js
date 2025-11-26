function groupQueries(queries, groupSize) {
  const snippets = [];
  groupSize = parseInt(groupSize);
  for (i = 0; i < queries.length; i += groupSize) {
    snippets.push(queries.slice(0 + i, groupSize + i));
  }

  return snippets;
}