function avoidObstacles(inputArray: number[]): number {
  let result = 1;
  let max = Math.max(...inputArray);
  for (let i = 1; i <= max; i++) {
    if (inputArray.every((x) => x % i !== 0)) {
      result = i;
      return result;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
