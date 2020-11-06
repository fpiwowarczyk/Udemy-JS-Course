//Task 1
const sayHello = (name) => {
  console.log('Hi ' + name);
}
//Task 2
const sayHelloV2 = (hi,name) =>{
  console.log(`${hi} ${name}`);
}

const sayHelloV3 = () =>{
  console.log("Hi Mark!");
}

const sayHelloV4 = name => `Hi ${name}`;


sayHello("Filip");

sayHelloV3();

sayHelloV2("Hi","Filip");

console.log(sayHelloV4("Filip"));

//Task 3

const sayHelloV5 = (name= "Filip") =>{
  console.log('Hi '+name);
}

sayHelloV5();

//Task 4

function checkInput (callBack,...text){
  let emptyText = false;
  for(const word of text){
    if(!word){
      emptyText = true;
      break;
    }
  }
  if(!emptyText) callBack();
}

function badInput(){
  alert("You gave no input");
}

checkInput(badInput,"");