function boxBlur(image: number[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < image.length - 2; i++) {
    const row: number[] = [];
    for (let j = 0; j < image[i].length - 2; j++) {
      let sum = 0;
      let count = 0;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          sum += image[x][y];
          count++;
        }
      }
      row.push(Math.floor(sum / count));
    }
    result.push(row);
  }
  return result;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
