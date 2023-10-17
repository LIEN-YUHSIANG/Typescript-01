// Union type

// Gain more flexibility to work with multiple type
function combine(input1: number | string | boolean, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAge = combine(30, 26);
console.log(combineAge);

const combinename = combine("Max", "Anna");
console.log(combinename);

//Literal types

// Create our type aliases, we can use any where and make sure we refer to the same types every time.
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine2(
  input1: Combinable,
  input2: Combinable,
  // manually set literal types, we can set the exact string or and value we want
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; // add a `+` in front of varible to conver to 'number'
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAge2 = combine2(30, 26, "as-number");
console.log(combineAge2);

const combineStringAges = combine2("30", "26", "as-number");
console.log(combineStringAges);

const combinename2 = combine2("Max", "Anna", "as-text");
console.log(combinename2);
