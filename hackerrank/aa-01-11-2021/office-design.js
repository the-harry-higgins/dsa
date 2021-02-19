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
 * Complete the 'getMaxColors' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER money
 */

function getMaxColors(prices, money) {
  // Write your code here
  // Get total sum
  // Try largest length -> 1 possible
  // Try every possibility at length - 1 -> 2 possible
  let sum = prices.reduce((a, b) => a + b);
  if (sum <= money) {
    return prices.length;
  }

  for (let size = prices.length - 1; size > 0; size--) {
    sum -= prices[size];
    let sizeSum = sum
    if (sizeSum <= money) {
      return size;
    }
    for (let start = 0; start < prices.length - size; start++) {
      sizeSum += prices[size + start] - prices[start];
      // console.log(start, size);
      // console.log(prices.slice(start + 1, size + start + 1));
      // console.log(sizeSum);
      if (sizeSum <= money) {
        return size;
      }
    }
  }
  return 0;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const pricesCount = parseInt(readLine().trim(), 10);

  let prices = [];

  for (let i = 0; i < pricesCount; i++) {
    const pricesItem = parseInt(readLine().trim(), 10);
    prices.push(pricesItem);
  }

  const money = parseInt(readLine().trim(), 10);

  const result = getMaxColors(prices, money);

  ws.write(result + '\n');

  ws.end();
}
