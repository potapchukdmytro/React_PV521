// export може бути багато
// export default може бути тільки один

export function add(num1, num2) {
    return num1 + num2;
}

export function sub(num1, num2) {
    return num1 - num2;
}

export function div(num1, num2) {
    return num1 / num2;
}

export function mul(num1, num2) {
    return num1 * num2;
}

function calculate(num1, num2, op) {
    switch(op) {
        case "+":
            return add(num1, num2);
        case "-":
            return sub(num1, num2);
        case "/":
            return div(num1, num2);
        case "*":
            return mul(num1, num2);
        default:
            return 0;
    }
}

export default calculate;