function containsDuplicates(a: number[]): boolean {
  return a.some((value, index, array) => {
    return array.indexOf(value) !== index;
  });
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
