

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7 ,12 , 1 , -32];
// Task 1
const greaterThanFive = numbers.filter((value) =>{
    return value >5;
});
console.log(greaterThanFive);
let nums =[]
const mappedNumbers = numbers.map((value) => {
    const num = {
        number : value
    }
    nums.push(num);
});

console.log(nums);

//Reduce to one string
let numbersAsString ="";
const reducedNumber = numbers.reduce((numberAsString,value) => {
    numbersAsString+=value+",";
},numbersAsString);

console.log(numbersAsString);

//Task 2

const findMax = (...values) =>{
    let maxValue;
    if(values.length >0){
        maxValue=values[0]
    } else {
        alert("You gave no values");
        return;
    }

    for(const value of values){
        if(value > maxValue){
            maxValue = value;
        }
    }
    return maxValue;
}
console.log(findMax(...numbers));

// Task3

const findMaxAndMin = (...values) =>{
    let maxValue;
    let minValue;
    if(values.length >0){
        maxValue=values[0]
        minValue = values[0];
    } else {
        alert("You gave no values");
        return;
    }

    for(const value of values){
        if(value > maxValue){
            maxValue = value;
        }
        if(value < minValue){
            minValue = value;
        }
    }
    return [minValue,maxValue];
}

let [minValue,maxValue] = findMaxAndMin(...numbers);
console.log(minValue);
console.log(maxValue);

// Task 4

const uniqueValues = new Set();

uniqueValues.add(1);
uniqueValues.add(2);
uniqueValues.add(2);
uniqueValues.add(4);

console.log(uniqueValues);