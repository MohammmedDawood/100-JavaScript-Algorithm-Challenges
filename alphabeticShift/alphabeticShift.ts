function alphabeticShift(inputString: string): string {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

  let inputShifted = inputString.split("");

  for (let i = 0; i < inputShifted.length; i++) {
    if (inputShifted[i] === "z") {
      inputShifted[i] = "a";
    } else {
      inputShifted[i] = alphabet[alphabet.indexOf(inputShifted[i]) + 1];
    }
  }
  return inputShifted.join("");
}

console.log(alphabeticShift("crazy"));
