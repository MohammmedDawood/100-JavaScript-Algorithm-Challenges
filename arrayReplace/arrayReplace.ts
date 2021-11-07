function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return inputArray.map((x) => (x === elemToReplace ? substitutionElem : x));
}

console.log(arrayReplace([1, 2, 1], 1, 3));
