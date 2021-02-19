
/*
 * Complete the 'evenSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */

function evenSubarray(numbers, k) {
  // Write your code here
  let solutions = new Set();

  for (let i = 0; i < numbers.length; i++) {
    let odds = 0;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] % 2 === 1) {
        odds++;
      }
      if (odds <= k) {
        const key = String(numbers.slice(i, j + 1));
        if (!solutions.has(key)) {
          solutions.add(key);
        }
      } else {
        break;
      }
    }
  }

  return solutions.size;
}

function evenSubarrayImproved(numbers, k) {
  // Write your code here
  let solutions = new Set();

  for (let i = 0; i < numbers.length; i++) {
    let odds = 0;
    let str = '';
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] % 2 === 1) {
        odds++;
      }
      if (odds <= k) {
        str += `${numbers[j]},`
        if (!solutions.has(str)) {
            solutions.add(str);
        }
      } else {
        break;
      }
    }
  }
  
  return solutions.size;
}

const input = []
for (let i = 0; i < 100_000_000; i++) {
  input.push(1);
}

console.time('evenSubarrayImproved')

console.log(evenSubarrayImproved(input, 1));

console.timeEnd('evenSubarrayImproved')

console.time('evenSubarray')

console.log(evenSubarray(input, 1));

console.timeEnd('evenSubarray')