function checkPalindrome(inputString: string): boolean {
  let input = inputString.toLowerCase();
  let reverse = input.split("").reverse().join("");
  if (input === reverse) {
    return true;
  }
  return false;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
