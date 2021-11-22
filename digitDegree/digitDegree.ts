function digitDegree(n: number): number {
  let count = 0;
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
    count++;
  }
  return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
