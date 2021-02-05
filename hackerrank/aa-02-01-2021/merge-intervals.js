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
 * Complete the 'getMergedIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function checkAndMerge(mergedIntervals, start, end) {
  const indices = []
  for (let i = 0; i < mergedIntervals.length; i++) {
    const iStart = mergedIntervals[i][0];
    const iEnd = mergedIntervals[i][1];
    if ((start >= iStart && start <= iEnd) ||
      (end <= iEnd && end >= iStart) ||
      (start < iStart && end > iEnd)) {
      start = Math.min(start, iStart);
      end = Math.max(end, iEnd);
      indices.push(i);
    }
  }

  const newMerged = mergedIntervals.filter((interval, i) => {
    return !indices.includes(i);
  });

  newMerged.unshift([start, end]);

  return newMerged;
}


function getMergedIntervals(intervals) {
  // Write your code here
  let mergedIntervals = [];
  for (let i = 0; i < intervals.length; i++) {
    mergedIntervals = checkAndMerge(mergedIntervals, intervals[i][0], intervals[i][1]);
  }

  return mergedIntervals.sort((a, b) => a[0] - b[0]);
}

function main() {