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