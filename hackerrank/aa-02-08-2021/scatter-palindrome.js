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
 * Complete the 'scatterPalindrome' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY strToEvaluate as parameter.
 */

function isPalindrome(lookup) {
  let middleCharFound = false;
  for (let key in lookup) {
    // console.log('key',key);
    const count = lookup[key];
    if (count % 2 === 0) {
      continue;
    } else {
      if (middleCharFound) {
        return false
      }
      middleCharFound = true;
    }
  }
  return true;
}

function addToLookup(char, lookup) {
  if (char in lookup) {
    lookup[char] += 1;
  } else {
    lookup[char] = 1
  }
}

function removeFromLookup(char, lookup) {
  if (char in lookup) {
    if (lookup[char] === 1) {
      delete lookup[char];
    } else {
      look[char]--;
    }
  } else {
    console.log('Something broke');
  }
}

function scatterPalindrome(strToEvaluate) {
  // Write your code here
  const lengths = [];

  strToEvaluate.forEach(str => {
    const palindromes = [];
    for (let start = 0; start < str.length; start++) {
      // console.log('here');
      const lookup = {}
      // addToLookup(str[start], lookup);
      for (let end = start + 1; end <= str.length; end++) {
        const substr = str.slice(start, end);
        // console.log('substring',substr);
        // console.log(lookup);
        addToLookup(str[end - 1], lookup);
        if (isPalindrome(lookup)) {
          palindromes.push(substr);
        }
        // console.log(palindromes);
      }
    }

    lengths.push(palindromes.length);
  })


  return lengths;

}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const strToEvaluateCount = parseInt(readLine().trim(), 10);

  let strToEvaluate = [];

  for (let i = 0; i < strToEvaluateCount; i++) {
    const strToEvaluateItem = readLine();
    strToEvaluate.push(strToEvaluateItem);
  }

  const result = scatterPalindrome(strToEvaluate);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
