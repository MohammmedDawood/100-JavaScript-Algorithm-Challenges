function firstNotRepeatingCharacter(s: string): string {
  let dict: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      dict[s[i]]++;
    } else {
      dict[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) {
      return s[i];
    }
  }
  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
