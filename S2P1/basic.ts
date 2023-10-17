// Specify the type we want for the parameter
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // Non Ts way to check input type
  //   if (typeof number1 !== "number" || typeof number2 !== "number") {
  //     throw new Error("Incorrect input!");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// This is another syntax to assign type
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
// resultPhrase = 0;

add(number1, number2, printResult, resultPhrase);
