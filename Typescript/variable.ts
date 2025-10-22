// Variable - Storage - Which stores either a single or multiple values

// datatype varaibleName = value - int i = 10

// 3 ways to declare a variable

// ES6 - ECMA SCRIPT 6 - 2015

// 1. var - In modern JS/TS we will not be using var
// 2. let - Whenever we know that the value of the varaible 
// might get changed in the future
// 3. const - Which is use to declare constant varaible

// Syntax: - JS
// keyword(let/const) variablename = value

// Syntax: - TS
// keyword(let/const) variablename : datatype(Optional) = value
let e : string = "90"

// Type Annotation
// Type inference

// e = "100"
// e = true

// Local scoped variable  - {...} - block of code {...}
// Global scoped variable - outside of the block {...}

 let d : number = 10

{
    let f : number = 10
    console.log("Inside Block ", f)
    console.log("Inside Block ", d)
}

console.log("Outside Block ", d)
//console.log("Outside Block ", f) 


// var - 2015 - ES5, ES6 - 2015, oops
// 1. scope  - functional scoped -// not applicable {...}
// 2. Whenever we declare a variable using var keyword, 
// it can be re-declared and can also be reinitialized
// 3. It is not mandatory to intialize a variable during declaration

var i = 20
var i = 30
var i = 40
console.log(i) // 40

var j = 100
j = 2000

var k;


k = "TS"




function varTest(){
    var x = 50 // local scope
}
//console.log(x)

var flag = true // Global scope

if(true){
    var flag = false // global scope
}
console.log(flag)



// let
// 1. scope - block scoped - {...}
// 2. Whenver we declare a variable using let keyword, it cannot be re-declared 
// but can be reinitialized.
// 3. It is not mandatory to intialize a variable during declaration

const flaglet = true // Global scope

if(true){
    const flaglet = false // local scope
    console.log(flaglet) // false
}

console.log(flaglet) // true

let m = "TS"
//let m = "JS"

m = "JS"

let n 
n = 324324.43456

// const
// 1. scope - block scoped - {...}
// 2. Whenver we declare a variable using const keyword, it cannot 
// be re-declared and cannot be reinitialized.
// 3. It is mandatory to intialize a variable during declaration    

const l = 100
//const l = 100
// l = 400


// What is difference between var, let and const

// var 
// 1. scope  - functional scoped -// not applicable {...}
// 2. Whenever we declare a variable using var keyword, 
// it can be re-declared and can also be reinitialized
// 3. It is not mandatory to intialize a variable during declaration

// let
// 1. scope - block scoped - {...}
// 2. Whenver we declare a variable using let keyword, it cannot be re-declared 
// but can be reinitialized.
// 3. It is not mandatory to intialize a variable during declaration

// const
// 1. scope - block scoped - {...}
// 2. Whenver we declare a variable using const keyword, it cannot 
// be re-declared and cannot be reinitialized.
// 3. It is mandatory to intialize a variable during declaration 

