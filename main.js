function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function operate(num1, operator ,num2){
    if(operator === "+"){
        return add(num1,num2)
    }
    else if(operator === "-"){
        return sub(num1,num2)
    }
    else if(operator === "*"){
        return mul(num1, num2)
    }
    else{
        return div(num1,num2)
    }
}
let a;
let b;
let result;
let operator;
let isFirst = true;
let justCalculated = false;
let canBeOp = true;
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".keys")
numbers.forEach((number) =>{
    number.addEventListener("click", () =>{
        let value = number.textContent
        if (!isNaN(value)) {
            if (justCalculated) {
                a = value; 
                display.textContent = a;
                justCalculated = false;
                isFirst = false;
                return;
            }

            if (isFirst) {
                a = (a || "") + value;
                display.textContent = a;
                isFirst = false;
            } else {
                b = (b || "") + value;
                display.textContent = b;
            }
        }
        else if(value === "+" || value === "-" || value === "*" || value === "/" && canBeOp){
            operator = value;
            display.textContent = ""
            canBeOp = false
        }
        else if(value === "="){
            alert((parseInt(a)+" " +operator+ " "+parseInt(b)))
            result = operate(parseInt(a),operator,parseInt(b))
            display.textContent = result
            a = result
            b = null
            operator = null
            isFirst = false
            justCalculated = true
        }
        else if(value === "AC"){
            display.textContent = ""
            a = null
            b = null
            result = null
            isFirst = true;
        }
        else{
            alert("error")
        }
    })
})
