// The `Unknown` type

// We can store any type of value in a unknown type variable,
// but there will be error if we want to set a variable with string type, to a
// variable with a unknown type.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// We have to check the item's type of the unknow-type variable first, before we can assign
// it to a variable with a string or other types.
if (typeof userInput === "string") {
  userName = userInput;
}

// The `never` type

// Specify that the function will never return a value
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
