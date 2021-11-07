function isCaseInsensitivePalindrome(inputString: string): boolean {
  const reversed = inputString.split("").reverse().join("");
  return inputString.toLowerCase() === reversed.toLowerCase();
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
