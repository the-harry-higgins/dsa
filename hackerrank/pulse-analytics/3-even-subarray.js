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
 * Complete the 'evenSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */

function evenSubarraya(numbers, k) {
  // Write your code here
  let solutions = [];
  for (let i = 0; i < numbers.length; i++) {
    let odds = 0;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] % 2 === 1) {
        odds++;
      }
      if (odds <= k) {
        solutions.push([i, j]);
        // console.log(String(numbers.slice(i,j+1)));
        // if (!solutions.has(String(numbers.slice(i,j+1)))) {
        //     solutions.add(String(numbers.slice(i,j+1)));
        // }
      } else {
        break;
      }
    }
  }
  const unique = new Set();
  for (let solution of solutions) {
    const key = String(numbers.slice(solution[0], solution[1] + 1));
    // console.log(String(numbers.slice(i,j+1)));
    if (!unique.has(key)) {
      unique.add(key);
    }
  }
  return unique.size;
}


function evenSubarray(numbers, k) {
  // Write your code here
  const solutions = {}
  numbers.forEach((_, i) => {
    solutions[i] = new Set();
  });

  for (let i = 0; i < numbers.length; i++) {
    let odds = 0;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] % 2 === 1) {
        odds++;
      }
      if (odds <= k) {
        const key = String(numbers.slice(i, j + 1));
        if (!solutions[j - i].has(key)) {
          solutions[j - i].add(key);
        }
      } else {
        break;
      }
    }
  }
  let count = 0;
  Object.keys(solutions).forEach(key => {
    count += solutions[key].size
  });
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numbersCount = parseInt(readLine().trim(), 10);

  let numbers = [];

  for (let i = 0; i < numbersCount; i++) {
    const numbersItem = parseInt(readLine().trim(), 10);
    numbers.push(numbersItem);
  }

  const k = parseInt(readLine().trim(), 10);

  const result = evenSubarray(numbers, k);

  ws.write(result + '\n');

  ws.end();
}
