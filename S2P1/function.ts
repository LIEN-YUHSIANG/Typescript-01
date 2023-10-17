// Callback function and function type

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// `void` type
function printResult(num: number): void {
  console.log("Result " + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

// Add function type to callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// Since we specify the function type of callback, Ts can help us to find errors
// in the callback
addAndHandle(10, 20, (result) => {
  console.log(result);
});
