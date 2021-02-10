/**
 * @param {character[][]} grid
 * @return {number}
 */
//m = rows, n = cols
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const findIsland = (row, col, grid, visited) => {
  if (visited.has(`${row}-${col}`)) {
    return;
  } else {
    visited.add(`${row}-${col}`);
  }

  for (let dir of dirs) {
    const dRow = dir[0];
    const dCol = dir[1];
    const newRow = dRow + row;
    const newCol = dCol + col;
    if (newRow >= 0 && newRow < grid.length &&
      newCol >= 0 && newCol < grid[0].length &&
      grid[newRow][newCol] === "1") {
      findIsland(newRow, newCol, grid, visited);
    }
  }

  return;
}

var numIslands = function (grid) {
  const maxRows = grid.length;
  const maxCols = grid[0].length;

  let islands = 0;

  const visited = new Set();

  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxCols; j++) {
      if (grid[i][j] === "1") {
        if (!visited.has(`${i}-${j}`)) {
          findIsland(i, j, grid, visited);
          islands++;
        }
      }
    }
  }

  return islands;
};