const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addButton = document.getElementById('add');   

const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton   
 = document.getElementById('divide');
const resultElement = document.getElementById('calculation-result');   


function performCalculation(operator) {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers.';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;   

            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Division by zero is not allowed.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Invalid operator.';   

            return;
    }

    resultElement.textContent = result;
}

addButton.addEventListener('click', () => performCalculation('+'));
subtractButton.addEventListener('click', () => performCalculation('-'));
multiplyButton.addEventListener('click', () => performCalculation('*'));
divideButton.addEventListener('click', () => performCalculation('/'));
