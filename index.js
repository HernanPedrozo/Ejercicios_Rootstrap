class Calculator{
    constructor(operand1Element, operand2Element){
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.clear();
    }

    clear () {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
    }

    updateUI(){
        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = this.operand2;     
    }

    appendNumber(number){
        if (number === "."  && this.operand2.includes(".")) return;
        
        this.operand2 = this.operand2 === 0 ? number : this.operand2.toString() + number;

        this.updateUI();
    }

    operation(operator){
        if(this.operator){
            this.calc();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = 0;
        this.updateUI();
    }

    calc(){
        switch(this.operator){
            case "+":
                this.operand1 = +this.operand1 + +this.operand2;
                break;
            case "-":
                this.operand1 = +this.operand1 - +this.operand2;
                break;
            case "*":
                this.operand1 = +this.operand1 * +this.operand2;
                break;
            case "/":
                this.operand1 = +this.operand1 / +this.operand2;
                break;
    }
    this.operator = "";
    this.operand2 = 0;
    this.updateUI();
}

}
const operand1Element = document.querySelector("[data-operand-1]");
const operand2Element = document.querySelector("[data-operand-2]");
const clearButton = document.querySelector("[data-clear]");
const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
clearButton.addEventListener("click", () =>{
    calculator.clear();
})

numberButton.forEach(button =>{
    button.addEventListener("click", () =>{
        calculator.appendNumber(button.innerHTML);
    })
})

operationButton.forEach(button=>{
    button.addEventListener("click", () =>{
        calculator.operation(button.innerHTML);
    });
});

equalButton.addEventListener("click", () =>{
    calculator.calc();

});

const calculator = new Calculator(operand1Element, operand2Element);





/*
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

*/
/*
function calculatorOperator(a, b, operation) {
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
calculatorOperator(1, 2, '+');
calculatorOperator('1', 2, '+');
calculatorOperator('a', 1, '+');
calculatorOperator(1, 2, 'hi');
*/


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