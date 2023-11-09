function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculator(a, b, operation) {
    if (typeof a === "string") {
        console.log("Operación inválida");
    } else if (typeof b === "string") {
        console.log("Operación inválida");
    } else {
        switch (operation) {
            case "+":
                result = sum(a, b);
                console.log(result);
                break;
            case "-":
                result2 = substract(a, b);
                console.log(result2);
                break;
            case "*":
                result3 = multiply(a, b);
                console.log(result3);
                break;
            case "/":
                result4 = divide(a, b);
                console.log(result4);
                break;
            default:
                console.log("Operación inválida");
                return 0;
        }
    }
}
calculator(1, 2, '+');
calculator('1', 2, '+');
calculator('a', 1, '+');
calculator(1, 2, 'hi');



/*
if (operation == '+') {
    sum(a, b);
} else if (operation == '-') {
    substract(a, b);
} else if (operation == '*') {
    multiply(a, b);
} else if (operation == '/') {
    divide(a, b);
} else {
    console.log('Invalid operation');
}

*/