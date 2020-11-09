# Udemy Curse Notes 
Note about important stuff from course. They are not full becouse i knew alot of
stuff before course and omit them. 

#Module 5 Behind the Scenes

JavaScript Engine execute our code. 

Java Script is single-threaded 
### How Code Gets Executed 
Heap - Stores data in your system memory and manages access to it

Stack - Manages your program flow
 --
We can split  JS into two pieces:  
* JS Language - our code
* Browser API - APIs from browser that you can use in your script 

Primitive vs Reference Values 
-- 
**Primitive Values**
 aaa
Strings, number, booleans , null etc.

They are stored in memory (normally on stack), variable store value.

Copying a variable copies the value

**Reference Values**

All other objects ("more expensive")


Stored in memory (Heap), variable stores a pointer to location in memory

Copying a variable copies the pointer/ reference 

To make real copy of reference you have to use  
``` JavaScript
// Copy of reference
let hobbies =['Sports'];
let moreHobbies =hobbies;

hobbies.push('Cooking');

moreHobbies
> ["Sports","Coocking"]

// Real copy
let hobbies =['Sports'];
let moreHobbies =[...hobbies];

hobbies.push('Cooking');

moreHobbies
> ["Sports"]
```

Garbage Collector 
--

Periodically checks Heap for unused objects (object without references). Removes them.

Still, you have to remember about memory leaks.

Example
```JavaScript
function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', function() { // MemoryLeak becouse of that part
    const value = messageInput.value; // It add eventListener everytime
    console.log(value || 'Clicked me!'); // Fixed by using function external not lambda 
  });
}

addListenerBtn.addEventListener('click', addListener);
```
# Module 6 More on Functions

Different ways of creating functions

Anonymous Functions

Callback Functions & Functions in Functions

Default Arguments & Rest Operator

bind() & More 

Parameters vs arguments
--

**Parameters** variables which you specify between parentheses when defining a function

**Arguments** concrete values you pass to a function when calling that function

Function Declaration vs Function Expression
--

``` JavaScript
// Function Declaration
function multiply(a,b){
    return a*b;
}

// Function Expression
const multiply = function (a,b) {
    return a*b
}
```

Arrow Function 
--
``` JavaScript
// General syntax
(arg1,arg2) => { ... }
// No Arguments
() => {...}
//One argument 
arg => {...}
//One expression in function body
(a,b) => a+b // Always return result of expression without return 
```


Rest Operator
--

Sometime we don't know how many arguments function is going to have. Then we can use rest operator.
Example :
``` JavaScript
// With arrow function 
// three dots '...' are rest Operator, that means you can add as many as you want arguments.
// It takes arguments and merge them into array.
const sumUp = (...numbers) => {
    let sum =0;
    for(const num of numbers) {
        sum += num;
    }
    return sum;
};

// Without arrow function
 // Arguments works as  rest operator but it isnt good practice to use it. 
const subtractUp = function () {
    let sum =0;
    for(const num of arguments) {
        sum -= num;
    }
    return sum;
}
```
Rest Operator have to be last argument in your arguments list and there can be only one.

bind()
--

Function bind let you prepare your callback function when it is called. It has 2 arguments bind('this',arguments) arguments are added at the end of arguments lists of function.

# Module 7: Working with DOM is JS

DOM - Document Object Model 

Querying Elements
--

querySelector() - query css element

getElementById() - get element from HTML 

querySelectorAll() - return collection of elements on your DOM. 

Family :)
--

Child - Direct child node or element

Descendant - Direct or indirect child node or element
 
Parent - Direct parent node or element

Ancestor - Direct or indirect parent node or element 

# Module 8: More on Arrays & Iterables 

Iterable - Object that we can iterate

Array-like objects - Objects that have a length property and use indexes to access items

Implementations of array 
``` JavaScript
const arr = [1]; 

const arr = Array(1);

const = new Array(1);
```

Interesting methods
--

push() - add an element at the end of array

pop() - remove an element from the end

shift() - remove element from the start

unshift() - add an element at the start

splice() - add and removes items from arr 

concat() - concatenate arrays 

indexOf() - returns index of element

find() - returns first time which meets requirements

forEach() - do something for each element of arr something like for of loop

map() - makes new array with changed values

reverse() - reverse array

sort() - sort array 

filter() - make a new array with items that meet requirements. 

reduce() - reduces all emenets of array to one or do something with them. Commonly used with map reduce to 
map your elemenents and reduce them.

split() and join() - split and join strings into one/few strings 

Spread operator
--

...list - this is spread operator like rest operator let you access more than one element at once 
for example to copy : 
``` JavaScript
 
copiedList = [...orginalList];

// To find some value for example to find minimal val
Math.min(...numberList);
```

Sets
--

Sets are data structs that stores pairs of key - values and do net let you store duplicates. Great when you 
need uniknes. 

Maps
--


Finished at 217

