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



// Complete the numberOfCharactersEscaped function below.
function numberOfCharactersEscaped(expression) {
  let inHash = false;
  let total = 0;
  let partial = 0;
  let prev = null;
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];
    if (char === '#') {
      count += partial;
      inHash = true;
    } else if (char !== '!') {
      if (prev === '!') {
        partial++;
      }
    }
    prev = char;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const expression = readLine();

  const res = numberOfCharactersEscaped(expression);

  ws.write(res + '\n');

  ws.end();
}
