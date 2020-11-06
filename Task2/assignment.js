const task3Element = document.getElementById('task-3');

function alertHello(){
    alert("Hello!");
}

function alertInput(input){
    alert(input);
}

alertHello();
alertInput("Hello from Input");

task3Element.addEventListener('click',alertHello);

function addStrings(str1,str2,str3){
    return str1+str2+str3;
}

alert(addStrings("Hello"," World","!"));
