let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Cal";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An Error Occured", 500);
console.log(result);
