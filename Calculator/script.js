let nums = document.getElementsByClassName("num");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let operate = document.getElementById("operate");

let canOperate = false;

Array.from(nums).forEach(num => {
    num.addEventListener('click', (event) => {display.textContent += num.textContent; canOperate = true;});
});

function AddOperation(operation, symbol)
{
    operation.addEventListener('click', (event) => {
        if (canOperate)
        {
            display.textContent += " " + symbol + " ";
            canOperate = false;
        }
    });
}

AddOperation(multiply, '*')
AddOperation(divide, '/')
AddOperation(add, '+')
AddOperation(subtract, '-')

clear.addEventListener('click', (event) => {display.textContent = ""});
operate.addEventListener('click', (event) => {
    let operations = display.textContent.split(" ");
    console.log(operations);
    result = parseFloat(operations[0]);
    for (let i = 1; i < operations.length-2; i += 2){
        console.log(operations[i])
        switch (operations[i]) {
            case "*":
                result *= parseFloat(operations[i+1]);
                break;
            case "/":
                result /= parseFloat(operations[i+1]);
                break;
            case "+":
                result += parseFloat(operations[i+1]);
                break;
            case "-":
                result -= parseFloat(operations[i+1]);
                break; 
        }
    }
    display.textContent = result.toString();
})

