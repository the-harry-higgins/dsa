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
 * Complete the 'howMany' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING sentence as parameter.
 */

function howMany(sentence) {
  // Write your code here
  const words = sentence.split(' ');
  let count = 0;
  for (let word of words) {
    word = word.toLowerCase();
    if (!"abcdefghijklmnopqrstuvwxyz-.,?!".includes(word[word.length - 1])) {
      continue;
    }
    let isAWord = true;
    for (let i = 0; i < word.length - 1; i++) {
      if (!"abcdefghijklmnopqrstuvwxyz-".includes(word[i])) {
        isAWord = false;
        break;
      }
    }
    if (isAWord) {
      count++;
    }
  }
  return count;
}
