function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter((value, index) => (index + 1) % k !== 0);

  //   let result: number[] = [];
  //   for (let i = 0; i < inputArray.length; i++) {
  //     if ((i + 1) % k !== 0) {
  //       result.push(inputArray[i]);
  //     }
  //   }
  //   return result;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
