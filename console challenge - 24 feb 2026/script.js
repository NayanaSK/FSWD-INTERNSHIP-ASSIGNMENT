let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let operation = prompt("Choose operation: + , - , * , /");

let result;

if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else {
    console.log("Invalid operation");
}

if (result !== undefined) {
    console.log("Result:", result);
}