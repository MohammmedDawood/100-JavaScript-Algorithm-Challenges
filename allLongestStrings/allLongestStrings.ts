function allLongestStrings(inputArray: string[]): string[] {
  let longestString: string = "";
  let longestStringArray: string[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestString.length) {
      longestString = inputArray[i];
      longestStringArray = [longestString];
    } else if (inputArray[i].length === longestString.length) {
      longestStringArray.push(inputArray[i]);
    }
  }
  return longestStringArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
