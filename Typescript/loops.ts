// Loops - Which will execute the same block of code {...} multiple times

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Duplication
// Maintenance
// Remove time takeing process

console.log("***********************");

for(let i = 1 ; i<=5 ; i++){
    console.log(i);
}

console.log("**********************************");

// 1. for loop 
        // a. for loop -  Traditional loop - if we know how many time we have to run the iteration
        // b. for ...of loop - Loops over the iterable object - Array - [12,3,4,5]
        // c. for ...in loop - Looping over the properties of an object - {key :value}

// 2. while loop - If we do not know how many times we have to run the iteration
// 3. do while loop - if we want to execute the loop atleast one time before chekcing the condition


// 10th May 2026 // 7 //

// {
//     name : "Joe"
//     age : 30
// }



// 1. for loop

// Syntax:

/*

for(initialisation; condition; increment/decrement)
{
  // block of code
  break
}
// initialisation - Initialise the value of a variable to start the execution. let i=1
// condition - Condition to check whether the loop should continue or not. let i<=5
// increment/decrement - Increase or decrease the value of the variable after each iteration. i++/i--

*/

// initialisation (let i = 10)
// declaration (let i)

for(let i =0; i<=5; ++i){ // 6<=5 - false
    console.log(i);//  0 1 2 3 4 5          // 5++ = 5+1=6
}

console.log("************************");

// 2. while loop

// Syntax :

/*
 initialisation
 while(condition)
 {
  // block of code
  increment/decrement
 }

*/

// 10 ... 1

let a = 10
while(a<=1){ // 0 >=1
    console.log(a);
    a--
}

console.log("*******************************");

// 3. do while loop

/*

initialisation

do 
{
  // block of code
  increment/decrement  
} while (condition);

*/

let j = 10

do{
    console.log(j);
    j--
} while(j<=1)



// print even number between 1 and 50 



// Function
// Array
// String - Methods
// Object
// Class
