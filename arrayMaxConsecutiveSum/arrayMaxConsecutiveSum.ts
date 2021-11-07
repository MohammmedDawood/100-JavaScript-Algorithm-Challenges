function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let maxSum = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    maxSum.push(inputArray.slice(i, i + k));
  }
  return Math.max(...maxSum.map((x) => x.reduce((a, b) => a + b)));
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
