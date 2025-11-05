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

// 1. Named Function - Function Declaration - A function which will also have a name is known as named function. - Whnever we have a function which can be utilised more than once.

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

// return statement should be the last statement inside the function body

function addition(a:number, b:number, c:number){
    return a+b+c
}


let result = addition(50,100,150) // let result = 300
console.log(result);

console.log(addition(50,100,100));

console.log(result * 100);

function launchURL(url: string){
  console.log(url);
}
launchURL("Https://google.com")

// 3. Non parameterised and non returning

function greet():void{
    console.log("Welcome to JS");
}

greet() // 

// 4. Non parameterised and returning function

function greeting():string{
    return "Welcome to Java"
}

console.log(greeting());

let result1 = greeting() //
console.log(result1);


// 2. Anonymous function - Function Expression - A function which will not have any name. Whenever we declare a function without having any name, that function we store inside a variable. This process is known function expression

// let i = 10 - Expression - let i = Function()

// Syntax: - 
/*

let/const variable = function(parameters: datatype) : return type
{
  // code
}

variable(arguments)


*/

// Anonymous and Arrow - call back function - A function which will be declared as a parameter to another function is known as call back function

const anonymousFun = function(a:number,b:number){
    console.log(a+b);
}

anonymousFun(10,20)

// Array - map, filter

// let abc = function(){
//     console.log("Anonymous Function ")
// }
 
// abc()


// Callback - 

// function functionName(func) 
// {
//     console.log(func(90,100));  
// }

// functionName(function(a:number,b){return a+b})


// a =10
// let  func = function(b:number,c:number){
//     return b+c
// }

// func(10,20)


function fun(name1 : Function){
   console.log(name1());
}

let name1 = function(){
    console.log("Call back function")
}

fun(function(){
    console.log("Line # 170 -Call back function")
})

function fun1(a:number){
    console.log(a); // 10
}

// a = 10

fun1(10)
fun(function(){
    console.log("Line # 182 - Another Call back function")
})

let arrray = function(){
    console.log("Call back function")
}




// function add4(a:number){
//     console.log(a);
// }

// add4(10)
// add4(50)

// add4(100)
// add4(500)

// add4(1000)
// add4(5000)

// add4(1000000)
// add4(5000000)


// 3. Arrow Function(=>) - in 2015 ES6 (ECMA SCRIPT 6) - It does not even require to use function keyword to declare the arrow function

// Syntax:

/*

const varaible = (parameter) =>{
 // code
}

variable(argument)

*/

// Arrow - When you are trying to declare which is having a single line

let arrowFun = (a:number,b:number,c:number) =>  (a+b+c)


console.log(arrowFun(10,20,30))


// Default and Optional Parameter(TS)

// Method Overloading - It is a process to create different function with the same name but with different parameters. It is bydefault not possible in JS & TS but by applying logic and using Default and Optional parameter we can achieve method overload.


// function test(){
//     console.log("Function1");
// }

// function test(title){
//     console.log("Function1 with parameter");
// }

// function test(title, name){
//     console.log("Function1 with 2 parameters");
// }

// test()
// test(name)
// test(name, age)


// Default Parameter - 

function test(title :string = "CEO", name:string = "Rahul"){
   console.log(title, name);
}

test()
test("QA")

test("Dev", "Joe")


// Optional Parameter(?)

function test2(name:string, age?:number = 20){
   //console.log(`Your name is ${name} and your age is ${age}`);
   if(age == undefined){ // undefined == null
     console.log(`Your name is ${name}`);
   }else{
     console.log(`Your name is ${name} and age is ${age}`);
   }
}

// let age 

// if(age === null){
//     console.log(age);
// }

// let age1 :number 

// console.log(age1);
// console.log("Line#", typeof age1);

// age == undefined
// age == null
// age == "" - X
// typeof age == "undefined"



test2("Java") // - //Java
test2("Java", 20) // Java 20

function test3(name:string, age?:number){
   //console.log(`Your name is ${name} and your age is ${age}`);
   if(age){ // undefined == null
    console.log(`Your name is ${name} and age is ${age}`);

   }else{
     console.log(`Your name is ${name}`);
   }
}

test3("Java") // - //Java
test3("Java", 20) // Java 20



// Rest Operator (...) - is to accept multiple value by using a single variable

function fun2(name:string, age:number, ...gift){
    console.log(name, age);
    console.log(gift);
}

fun2("JS", 5, 10,"20",30,true,60,0,70,80)