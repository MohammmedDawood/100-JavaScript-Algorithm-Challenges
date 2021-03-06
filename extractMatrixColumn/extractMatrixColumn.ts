function extractMatrixColumn(matrix: number[][], column: number): number[] {
  let columnVector: number[] = [];
  for (let i: number = 0; i < matrix.length; i++) {
    columnVector.push(matrix[i][column]);
  }
  return columnVector;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
