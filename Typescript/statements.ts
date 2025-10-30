// Conditional Statement - It allows us to execute the different block of code {...} based on different condition

// if statement - This will handle only the positive scenario
// if else statement - Which will handle both positive and negative
// if else if statement - This will validate more than 1 condition
// switch statement - This will also validate the multiple
// Ternary Operator(? :) - if else statement ((condition)? true : false)


// Cross browser

// 1. if statement - It will execute the if block of code only if condition is true


// Syntax:
/*
if(condition){
 // code
}
*/

let isPopup = "popup"

if(isPopup === "popup"){   // if("popup" == "Popup") // false
    console.log("Close the popup");
}

// 2. if else condition - If the condition is true then if block of code of code will be execute otherwise the else block of code will be executed.

// Syntax:

/*
if(condition){
   // condition true - this block of code will be execute
}
else{
   // else block of code 
}
*/

// Admin, user

const role = "normal"

if(role === "Admin")
{ // if("normal" === "Admin")
    console.log("Admin user navigation");
}
else
{
    console.log("Normal user navigation");
}


// 3. if else if statement  - Will validate multiple conditions. depending on the result of the condition the specific block of code will be executed

// Syntax:

/*
if(condition){
  // if the condition is true this block of code
}
else if(condition1){
 // if condition1 is true this block 
}
else if(condition2){
 // if condition2 is true this block  
}
else{
 // none of the condition is true
}

*/


// Cross browser - 

// Multiple environments - stage, qa, prod

let browser = "Safari"

if(browser === "chrome"){ // "Safari" === "chrome"
    console.log("Launch the chrome browser");
}
else if(browser === "firefox"){ // "Safari" === "firefox"
    console.log("Launch the firefox browser");
}
else if(browser == "safari"){ // "Safari" === "safari"
    console.log("Launch the safari browser");
}
else{
    console.log("Invalid broswer");
}


// 4. switch statement - 

// Syntax:

/*
switch (expression){
 case "value":
    // block of code
    break // it terminate the execution - loop or switch 
 case "value1":
    // block
    break
 default:
    // block
}
*/

let broswerName = "chrome"

switch(broswerName){ // switch("chrome")
    case "chrome":
        console.log("launch the chrome browser in switch")
        break
    case "firefox":
        console.log("launch the firefox browser in switch");
        break
    case "safari":
        console.log("Launch the safari browser in switch");
        break
    default:
        console.log("Invalid browser in switch");
}


// switch - switch will compare with the case value. It checks if any case value is avilable as similar to expression or not. If it is available it will directly jumpt to that block of code.
// break keyword is mandatory in switch statement -  it terminate the execution - loop or switch

// When to use if else if statement
// 1. Range available in the condition to validate - we have to use if else if
// 2. Multiple datatypes to be validate  - name = "Rahul", age >30, salary >200000
// 3. Logical Operator for the validation - && , ||

// When to use switch statement
// 1. No range
// 2. Single DT
// 3. No Logical operator


// 5. Ternary Operator (? :) - This is similar to if else but it use inline

// Syntax:

// condition? execute this if true : execute this if false

let age = 10;

const result = (age >= 18)? "yes" : "No"
console.log(result);



/*



*/


// >90 - A



// == "Safari" == "safari"
// === "Safari" == "safari"



// Write a program to display the grade of a student
// >90 - A
// >80 - B
// >70 - C
// >50 - D
// >=35 - E
// <35 -Failed

// Switch staetement to print the week name according to the day 1-7 - 
// 1- Sunday
// 2 - Monday ..... 7













// 