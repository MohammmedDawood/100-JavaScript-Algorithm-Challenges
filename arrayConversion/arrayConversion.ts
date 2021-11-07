function arrayConversion(inputArray, operation) {
  if (inputArray.length === 1) {
    return inputArray;
  } else {
    let result = [];
    for (let i = 0; i < inputArray.length; i += 2) {
      let element: Number;
      if (operation === undefined || operation === "sum") {
        element = inputArray[i] + inputArray[i + 1];
      } else if (operation === "multiply") {
        element = inputArray[i] * inputArray[i + 1];
      }
      result.push(element);
    }
    operation = operation === "multiply" ? "sum" : "multiply";
    return arrayConversion(result, operation);
  }
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8], "sum"));
