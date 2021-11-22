function crossingSum(matrix: number[][], a: number, b: number): number {
  const rowTotal = matrix[a].reduce((a, b) => a + b);
  console.log(rowTotal);
  let ColumnTotal = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (i !== a) {
      ColumnTotal += matrix[i][b];
    }
  }
  console.log(ColumnTotal);

  return rowTotal + ColumnTotal;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
