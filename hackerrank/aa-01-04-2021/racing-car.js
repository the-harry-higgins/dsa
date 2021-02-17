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
 * Complete the 'minimumMovement' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY obstacleLanes as parameter.
 */

function minimumMovement(obstacleLanes) {
  // Write your code here
  let currentLane = 2;
  let prevLane = null;
  let moves = 0;
  for (let obstacle of obstacleLanes) {
    if (obstacle === currentLane) {
      moves++;
      prevLane = currentLane;
      currentLane = null;
    } else {
      if (!currentLane && prevLane !== obstacle) {
        currentLane = 6 - prevLane - obstacle;
      }
    }
  }
  return moves;

}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const obstacleLanesCount = parseInt(readLine().trim(), 10);

  let obstacleLanes = [];

  for (let i = 0; i < obstacleLanesCount; i++) {
    const obstacleLanesItem = parseInt(readLine().trim(), 10);
    obstacleLanes.push(obstacleLanesItem);
  }

  const result = minimumMovement(obstacleLanes);

  ws.write(result + '\n');

  ws.end();
}
