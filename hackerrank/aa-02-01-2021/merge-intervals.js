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

function getMergedIntervals(intervals) {
  // Write your code here
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lastMerged = mergedIntervals[mergedIntervals.length - 1];
    let current = intervals[i];
    if (lastMerged[1] >= current[0]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      mergedIntervals.push(current);
    }
  }

  return mergedIntervals;
}
