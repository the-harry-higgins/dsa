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
 * Complete the 'droppedRequests' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY requestTime as parameter.
 */

function droppedRequests(requestTime) {
  // Write your code here
  let dropCount = 0;

  const counts = [0];

  let place = 0;
  for (let t = 1; t <= requestTime[requestTime.length - 1]; t++) {
    let reqCount = 0;
    let t9 = Math.max(0, t - 9);
    let t59 = Math.max(0, t - 59);
    let requestPast10 = counts.slice(t9).reduce((a, b) => a + b, 0);
    let requestPast60 = counts.slice(t59).reduce((a, b) => a + b, 0);
    // console.log('time:', t, 'requestPast10:', requestPast10, 'requestPast60', requestPast60)
    while (t === requestTime[place]) {
      if (reqCount < 3 && requestPast10 + reqCount < 20 && requestPast60 + reqCount < 60) {

      } else {
        dropCount++;
      }
      reqCount++;
      place++;
    }
    // console.log('time:', t, 'reqCount:', reqCount);
    counts.push(reqCount);
    // console.log(counts);
  }

  return dropCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const requestTimeCount = parseInt(readLine().trim(), 10);

  let requestTime = [];

  for (let i = 0; i < requestTimeCount; i++) {
    const requestTimeItem = parseInt(readLine().trim(), 10);
    requestTime.push(requestTimeItem);
  }

  const result = droppedRequests(requestTime);

  ws.write(result + '\n');

  ws.end();
}
