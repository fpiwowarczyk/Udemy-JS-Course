const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function calculate (operation) {
    let enteredNumber = getUserInput();
    let mathOperator;
    if(operation === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (operation === 'SUB'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (operation === 'MULTI'){
        currentResult *= enteredNumber
        mathOperator = '*';
    } else if (operation === 'DIV'){
        currentResult /= enteredNumber
        mathOperator = '/';
    }
    const description = `${currentResult} ${mathOperator} ${getUserInput()}`;
    outputResult(currentResult, description);
    logOperation(getUserInput(), currentResult, operation);
}
function logOperation(input, result, operator) {
    const logEntry = {
        'input': input,
        'result': result,
        'operator': operator
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

addBtn.addEventListener('click', calculate.bind(this,'ADD'));
multiplyBtn.addEventListener('click', calculate.bind(this,'MULTI'));
subtractBtn.addEventListener('click', calculate.bind(this,'SUB'));
divideBtn.addEventListener('click', calculate.bind(this,'DIV'));

