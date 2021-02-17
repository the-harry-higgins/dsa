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
 * Complete the 'featuredProduct' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY products as parameter.
 */

function featuredProduct(products) {
  // Write your code here
  const map = {};
  for (let i = 0; i < products.length; i++) {
    if (map[products[i]]) {
      map[products[i]]++;
    } else {
      map[products[i]] = 1;
    }
  }

  let max = 0;
  let product = null;
  Object.entries(map).forEach(([key, value]) => {
    if (value > max) {
      max = value;
      product = [key];
    } else if (value === max) {
      product.push(key);
    }
  });
  product.sort();
  return product[product.length - 1];
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const productsCount = parseInt(readLine().trim(), 10);

  let products = [];

  for (let i = 0; i < productsCount; i++) {
    const productsItem = readLine();
    products.push(productsItem);
  }

  const result = featuredProduct(products);

  ws.write(result + '\n');

  ws.end();
}
