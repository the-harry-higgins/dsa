'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}


/*
 * Complete the 'reachTheEnd' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER maxTime
 */
const indices = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function findSolutions(index, time, grid, maxTime, maxRow, maxCol) {
  if (time >= maxTime) return false;

  for (let i = 0; i < indices.length; i++) {
    const delta = indices[i];
    const row = index[0] + delta[0];
    const col = index[1] + delta[1];
    if (row >= 0 && row <= maxRow && col >= 0 && col <= maxCol && grid[row][col] === '.') {
      if (index[0] === maxRow && index[1] === maxCol) {
        return true;
      } else {
        if (findSolutions(index, newTime, grid, maxTime, maxRow, maxCol)) {
          return true;
        }
      }
    }
  }
  const newTime = time + 1;
  grid[index[0]][index[1]] = '#';
  for (index of possibleIndices) {

  }
  grid[index[0]][index[1]] = '.';
  return false;
}

function reachTheEnd(grid, maxTime) {
  // Write your code here    
  grid = grid.map(str => str.split(''));
  // console.log(grid);
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;

  if (maxRow === 0 && maxCol === 0) return 'Yes';

  grid[0][0] === '#';
  return findSolutions([0, 0], 0, grid, maxTime, maxRow, maxCol) ? 'Yes' : 'No';
}
