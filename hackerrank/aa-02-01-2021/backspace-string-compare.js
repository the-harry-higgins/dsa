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
 * Complete the 'compareStrings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function compareStrings(s1, s2) {
  // Write your code here
  const array1 = [];
  const array2 = [];

  let j = 0;
  for (let i = 0; i < s1.length || j < s2.length; i++) {
    if (i < s1.length) {
      if (s1[i] === '#') {
        array1.pop();
      } else {
        array1.push(s1[i]);
      }
    }
    if (j < s2.length) {
      if (s2[i] === '#') {
        array2.pop();
      } else {
        array2.push(s2[i]);
      }
      j++;
    }
  }

  return array1.join('') === array2.join('') ? 1 : 0;

}
function main() {