// Functions - {...}

function loginIntoApplication(){
    // fill the username
    // fill the password
    // click on login button
}



// 100TCs - 300 lines of code just to login into application
// Duplicate - loginIntoApplication() - reduces 195 line of code 
// Maintenance - 100TCs - reduces 99 steps

// Reusability - 


// test-1 - 3lines
// test -2 - 3lines

// What is difference between Function Declaration and Function Expression

// What is difference between parameter and argument

// Parameter - It is the variable defined in the function definition inside the paranthesis of a function. Ex: - function add(a,b) - a,b - parameter
// Argument - It is the value passed to the function when it is called. Ex: - add(10,20) - 10,20 -argument

// Function Expression - let i = Function()

// 1. Named Function - Function Declaration - A function which will also have a name is known as named function.
// 2. Anonymous Function - Function Expression - A function which will not have any name is known as anonymous function.
// 3. Arrow Function =>
// 4. Constructor Function  - Class 

// 5. Default parameter
// 6. Optional Parameter - TS
// 7. Rest parameter 



// 1. Named Function - A function which will be declared along with the name

// Syntax:
/*

function functionName(parameter:datatype, parameter1:datatype):return datatype(optional)
{
   // code
   return 
}

functionName(argument,argument1)

*/

// 1. Parameterised and non-returning function
function add(a:number,b:number){
    console.log(a+b);
}

add(50,20) 

// true - 1
// false - 0

// NaN - Not a Number

// 2. Parameterised and returning function

// return statement should be the last statement inside the function

function addition(a:number, b:number, c:number){
    return a+b+c
}


let result = addition(50,100,150) // let result = 300
console.log(result);

console.log(addition(50,100,100));

console.log(result * 100);