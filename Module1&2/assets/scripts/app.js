const defaultResult = 0;
let currentResult =defaultResult;
let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function add(){
    const description = `${currentResult} + ${getUserInput()}`;
    currentResult += getUserInput();
    outputResult(currentResult, description);
    logOperation(getUserInput(),currentResult,'+');
}

function subtract(){
    const description = `${currentResult} - ${getUserInput()}`;
    currentResult -= getUserInput();
    outputResult(currentResult, description );
    logOperation(getUserInput(),currentResult,'-');
}

function multiply(){
    const description = `${currentResult} * ${getUserInput()}`;
    currentResult *= getUserInput();
    outputResult(currentResult, description );
    logOperation(getUserInput(),currentResult,'*');
}

function divide(){
    const description = `${currentResult} / ${getUserInput()}`;
    currentResult /= getUserInput();
    outputResult(currentResult, description );
    logOperation(getUserInput(),currentResult,'/');
}

function logOperation(input,result,operator){
    const logEntry = {
        'input':input ,
        'result':result,
        'operator':operator
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

addBtn.addEventListener('click',add);
multiplyBtn.addEventListener('click',multiply);
subtractBtn.addEventListener('click',subtract);
divideBtn.addEventListener('click',divide);

