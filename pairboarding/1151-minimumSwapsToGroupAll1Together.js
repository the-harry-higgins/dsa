/**
 * https://www.youtube.com/watch?v=VXi_-2CmitM
 * Given a binary array data, return the minimum number of swaps required 
 * to group all 1's present in the array together in any place in the array.
 * 
 * Example 1.
 * [1,0,1,0,1]
 * => 1
 * explanation
 * [1,1,1,0,0] using 1 swap
 * [0,1,1,1,0] using 2 swaps
 * [0,0,1,1,1] using 1 swap
 * The minimum is 1.
 * 
 * 
 * Example 2
 * [0,0,0,1,0]
 * > 0
 * explanation
 * since there is only one 1 in the array, no swaps needed.
 * 
 * Example 3
 * [1,0,1,0,1,0,0,1,1,0,1]
 * -> 3
 * explanation
 * One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1]
 *
 */

const counter = (array) => {
  return array.reduce((acc, val) => acc + val, 0);
}

const minimumSwaps = (array) => {
  if (array.length === 0) return 0;
  
  const count = counter(array);

  if (count === array.length) return 0;

  let sum = 0;

  for (let i = 0; i < array.length - count; i++) {
    const section = array.slice(i, i + count);
    let tempSum = counter(section);

    if (tempSum > sum) {
      sum = tempSum;
    }
  }
  console.log(count - sum);
  return count - sum;
}

console.log('Example 1: ', [1, 0, 1, 0, 1]);
minimumSwaps([1, 0, 1, 0, 1]);

console.log('Example 2: ', [0, 0, 0, 1, 0]);
minimumSwaps([0, 0, 0, 1, 0]);

console.log('Example 3: ', [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1]);
minimumSwaps([1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1])

console.log('Example 4: ', [1, 1,1,1]);
minimumSwaps([1, 1, 1, 1])