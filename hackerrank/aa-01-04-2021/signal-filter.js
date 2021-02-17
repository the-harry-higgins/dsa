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
 * Complete the 'countSignals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY frequencies
 *  2. 2D_INTEGER_ARRAY filterRanges
 */

function countSignals(frequencies, filterRanges) {
  // Write your code here
  // filterRanges.sort((a,b) => a[0] - b[0]);
  let count = 0;
  let finalFilter = [filterRanges[0][0], filterRanges[0][1]];
  for (let range of filterRanges) {
    finalFilter[0] = Math.max(finalFilter[0], range[0]);
    finalFilter[1] = Math.min(finalFilter[1], range[1]);
  }
  for (let frequency of frequencies) {
    if (frequency >= finalFilter[0] && frequency <= finalFilter[1]) {
      count++;
    }
  }
  return count;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const frequenciesCount = parseInt(readLine().trim(), 10);

  let frequencies = [];

  for (let i = 0; i < frequenciesCount; i++) {
    const frequenciesItem = parseInt(readLine().trim(), 10);
    frequencies.push(frequenciesItem);
  }

  const filterRangesRows = parseInt(readLine().trim(), 10);

  const filterRangesColumns = parseInt(readLine().trim(), 10);

  let filterRanges = Array(filterRangesRows);

  for (let i = 0; i < filterRangesRows; i++) {
    filterRanges[i] = readLine().replace(/\s+$/g, '').split(' ').map(filterRangesTemp => parseInt(filterRangesTemp, 10));
  }

  const result = countSignals(frequencies, filterRanges);

  ws.write(result + '\n');

  ws.end();
}
