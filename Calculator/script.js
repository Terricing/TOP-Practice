let nums = document.getElementsByClassName("num");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let operate = document.getElementById("operate");

let canOperate = false;
let operationAdded = false;

Array.from(nums).forEach(num => {
    num.addEventListener('click', (event) => {display.textContent += num.textContent; canOperate = true;});
});

function AddOperation(operation, symbol)
{
    operation.addEventListener('click', (event) => {
        if (canOperate && !operationAdded)
        {
            display.textContent += " " + symbol + " ";
            canOperate = false;
            operationAdded = true;
        }
    });
}

AddOperation(multiply, '*')
AddOperation(divide, '/')
AddOperation(add, '+')
AddOperation(subtract, '-')

clear.addEventListener('click', (event) => {display.textContent = ""; operationAdded = false; canOperate = false});
operate.addEventListener('click', (event) => {
    let operations = display.textContent.split(" ");
    result = parseFloat(operations[0]);

    switch (operations[1]){
        case '*':
            result *= parseFloat(operations[2]);
            break;
        case '+':
            result += parseFloat(operations[2]);
            break;
        case '-':
            result -= parseFloat(operations[2]);
            break;
        case '/':
            result /= parseFloat(operations[2]);
            break;   
    }
    
    display.textContent = result.toString();
    canOperate = true;
    operationAdded = false;
})

