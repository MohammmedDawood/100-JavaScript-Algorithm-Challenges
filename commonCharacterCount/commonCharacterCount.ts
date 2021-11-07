function commonCharacterCount(s1: string, s2: string): number {
  let count = 0;
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.includes(s1Arr[i])) {
      count++;
      s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
    }
  }
  return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
