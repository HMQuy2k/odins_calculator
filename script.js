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

function operate(num1, num2, Op) {
    switch (Op) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return sub(num1, num2);
            break;
        case "*":
            return mul(num1, num2);
            break;
        case "/":
            return divd(num1, num2);
            break;
        default:
            return;
    }
}



/**
 * Function to take input and display
 * Default val == 0
 * When click a num => click event toggle:
 *                     button.value writen into variable
 *                     varible displayed
 * When click operator => event:
 *                      clear display
 *                      button.value writen into variable
 *                      variable display
 * next if click num then comback to step 1 until equal cliked
 * else if click equal then notihing happen
 * anytime click clear => event:
 *                          clear all variable
 *                          clear displace
 *
 */

let btns = document.querySelectorAll("button");
let displays = document.querySelector(".display > p");

for (let btn of btns) {
    btn.addEventListener("click", () => {
        displayManage(btn.value);
    });
}

/**
 * Create variable for display on calculator
 */
let numFirst;
let numSecond;
let operator;
let isFirstNum = 1;
const operatorArray = ["+", "-", "*", "/"];

function displayManage(buttonVal) {
    if (buttonVal === "clear") {
        numFirst = undefined;
        numSecond = undefined;
        operator = undefined;
        isFirstNum = 1;
        displays.textContent = "0";
        return;
    } else if (buttonVal === ".") {
        // concat . then next num then convert back to number
        if (isFirstNum) {
            // prevent situation where first input of variable is dot
            if (numFirst == undefined) {
                numFirst = 0;
            }
            numFirst += ".";
            displays.textContent = numFirst;
            return;
        } else if (!isFirstNum) {
            if (numSecond == undefined) {
                numSecond = 0;
            }
            numSecond += ".";
            displays.textContent = numSecond;
            return;
        }
        // if there is  no next num or next num == 0 then dot will be removed automatically
    }
    //   when hit the operator input => isFirstNum == 0;
    if (operatorArray.includes(buttonVal)) {
        operator = buttonVal;
        if (isFirstNum && numFirst !== undefined) {
            isFirstNum = 0;
        }
        displays.textContent = operator;
        return;
    }

    /** 
       * When enter first num, we have to assign value to the operand
       or else the value will be undefine => cannot write numSecond + call operate()
       * */
    if (isFirstNum) {
        if (typeof numFirst !== "string") {
            numFirst !== undefined ? (numFirst *= 10) : (numFirst = 0);
        }

        numFirst += Number(buttonVal);
        displays.textContent = numFirst;
    } else if (!isFirstNum) {
        if (typeof numSecond !== "string") {
            numSecond !== undefined ? (numSecond *= 10) : (numSecond = 0);
        }
        numSecond += Number(buttonVal);
        displays.textContent = numSecond;
    }
}
