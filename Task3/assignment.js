const randomNumber = Math.random();
// Task 1
if(randomNumber>0.7){
    alert("Value of randomNumber is greater than 0.7, it's value: "+randomNumber);
}
// Task 2
let arr = [1,2,3,4,5];

for(let  i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let i in arr){
    console.log(arr[i]);
}

// Task 3

for(let  i=arr.length-1;i<0;i++){
    console.log(arr[i]);
}

// Task 4

const anotherRandomNumber = Math.random();

if(randomNumber>0.7&&anotherRandomNumber>0.7 || !(randomNumber>0.2||anotherRandomNumber>0.2)){
    alert("RandomNumber and AnotherRandomNumber are greater than 0.7 or bot of them ale not greater than 0,2")
    console.log("Random number val: "+ randomNumber);

    console.log("Another random number val: "+ anotherRandomNumber)
}

console.log("Random number val: "+ randomNumber);

console.log("Another random number val: "+ anotherRandomNumber)
