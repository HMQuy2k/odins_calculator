/**
 * Mathematical functions (+, -, *, /) 
 * 
 * @param {number} a  1st number in the equation
 * @param {number} b  2nd number in the equation
 * @returns {number} sum, difference, product or quotient of the equation
 */
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}
// WARN: divd by 0 will return '+/- Infinity'
function divd(a, b) {
    return a / b;
}

/**
 * Create variable for display on calculator
 */
let numFirst;
let numSecond;
let operator;

function operate(num1, num2, Op) {
    switch (Op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return sub(num1, num2);
            break;
        case '*':
            return mul(num1, num2);
            break;
        case '/':
            return divd(num1, num2);
            break;
        default:
            return;
    }
}
