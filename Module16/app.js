// --------- Pure functions
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 2)); //3

console.log(add(10, 10)) //20

// --------- Unpure functions

function addRandom(num1){
    return num1+ Math.random();
}

console.log(addRandom(4)); // ???
