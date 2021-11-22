function differentSymbolsNaive(s: string): number {
  let letters = new Set();
  for (let i = 0; i < s.length; i++) {
    letters.add(s[i]);
  }
  return letters.size;
}

console.log(differentSymbolsNaive("cabca"));
