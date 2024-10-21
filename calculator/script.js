const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let firstValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value) {
            if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                firstValue = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (firstValue && operator && currentInput) {
        let result;
        const firstNum = parseFloat(firstValue);
        const secondNum = parseFloat(currentInput);

        if (operator === '+') {
            result = firstNum + secondNum;
        } else if (operator === '-') {
            result = firstNum - secondNum;
        } else if (operator === '*') {
            result = firstNum * secondNum;
        } else if (operator === '/') {
            result = firstNum / secondNum;
        }

        display.value = result;
        currentInput = result.toString();
        operator = '';
        firstValue = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    firstValue = '';
    display.value = '';
});
