/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const queue = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        const entry = [];
        entry.push([row, col]);
        const visited = new Set();
        visited.add(`${row},${col}`);
        entry.push(visited);
        queue.push(entry);
      }
    }
  }

  while (queue.length > 0) {
    const entry = queue.shift();
    const coord = entry[0];
    const visited = entry[1];
    const restOfWord = word.slice(1);
    if (helper(coord, restOfWord, visited, board)) {
      return true;
    }
  }

  return false;

};

const helper = (coord, word, visited, board) => {
  // console.log(coord, word, visited);
  if (word.length === 0) {
    return true;
  }

  const row = coord[0];
  const col = coord[1];

  const adjacentCells = [[row - 1, col], [row, col + 1], [row + 1, col], [row, col - 1]];

  const maxRow = board.length - 1;
  const maxCol = board[0].length - 1;

  const queue = []

  adjacentCells.forEach(cell => {
    const row = cell[0];
    const col = cell[1];
    if (row >= 0 && row <= maxRow && col >= 0 && col <= maxCol) {
      if (board[row][col] === word[0] && !visited.has(`${row},${col}`)) {
        const entry = [];
        entry.push([row, col]);
        const newVisited = new Set([...visited]);
        newVisited.add(`${row},${col}`);
        entry.push(newVisited);
        queue.push(entry);
      }
    }
  });

  while (queue.length > 0) {
    const entry = queue.shift();
    const coord = entry[0];
    const visited = entry[1];
    const restOfWord = word.slice(1);
    if (helper(coord, restOfWord, visited, board)) {
      return true;
    }
  }

  return false;

}