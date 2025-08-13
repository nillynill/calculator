let number1 = "";
let number2 = "";
let userInput = "";     //user input...can be number1 or number1 and the operator ... or number1, operator and number2
let result = "";
let operation;
let operatorName;
let operatorSign;

const numbers = Array.from(document.querySelectorAll(".number"));
const resultDisplay = document.querySelector("#resultDisplay");
const userInputDisplay = document.querySelector("#userInputDisplay");
const operators = Array.from(document.querySelectorAll(".operator"));


//number buttons
numbers.forEach((number) => {
    number.addEventListener("click", () => { 
        if (userInput == ""){                                  
            resultDisplay.style.fontSize = "38px";
            number1 += number.textContent;
                if (number1.length > 12){
                    number1 = number1.substring(0, 12);
                    resultDisplay.textContent = number1;
                    userInputDisplay.textContent = resultDisplay.textContent;                    
                }else{
                    resultDisplay.textContent = number1;
                }
        }else if (userInput.charAt(userInput.length-2) == "="){
            number1 = "";
            number1 += number.textContent;
            resultDisplay.textContent = number1;
            userInput = "";
            userInputDisplay.textContent = userInput;
        }else{
            number2 += number.textContent;           
                if (number2.length > 12){
                    number2 = number2.substring(0, 12);
                    resultDisplay.textContent = number2;
                    userInputDisplay.textContent = resultDisplay.textContent;                                  
                }else{
                    resultDisplay.textContent = number2;
                }; 
        };
    });
})

//operator buttons
operators.forEach((operator) => {
    operator.addEventListener("click", () => { 
        operatorName = operator.id
        operatorSign = operator.textContent
        chooseoperator(operatorSign, operatorName);
    });
})

function chooseoperator(operatorSign, operatorName) {
    if (number1.length != 0 && number2.length == 0) {       //boyle yazmaya gerek yok gibi: (number1.length != 0 && (userInput == "" || (userInput != "" && number2.length == 0)))
        userInput = number1 + operatorSign;
        userInputDisplay.textContent = userInput;
        operation = operatorName;
    }
    else {
        operate();
        userInput = number1 + operatorSign;
        userInputDisplay.textContent = userInput;
        operation = operatorName;
    }
}

//calculation functions
function operate() {
    if(operation == "add"){
        result = +number1 + +number2;
    }
    else if(operation == "subtract"){
        result = +number1 - +number2;
    }
    else if(operation == "multiply"){
        result = +number1 * +number2;
    }
    else if(operation == "divide"){
        if(+number2 != 0){
            result = +number1 / +number2;
        }
        else{
            alert("Divide by 0 Error");
            result = +number1;
        }
    }    
    result = parseFloat(result.toFixed(2));
    resultDisplay.textContent = result;
    resultDisplay.textContent.length > 12? resultDisplay.style.fontSize = "24px" : resultDisplay.style.fontSize = "38px";
    number1 = result.toString();
    number2 = "";
}

// equals button
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener("click", () => {
    if (number1.length != 0 && number2.length != 0 && userInput.charAt(userInput.length - 2) != "=") {
        userInput += number2 + " = ";
        operate();
        operation = "";
        userInputDisplay.textContent = userInput;
    }
});
