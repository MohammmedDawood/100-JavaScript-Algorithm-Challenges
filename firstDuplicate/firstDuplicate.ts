function firstDuplicate(a: number[]): number {
  let set = new Set();
  for (let i = 0; i < a.length; i++) {
    if (set.has(a[i])) {
      return a[i];
    } else {
      set.add(a[i]);
    }
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
