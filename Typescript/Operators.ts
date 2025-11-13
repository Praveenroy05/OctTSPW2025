//Operators - Operators is a symbol that performs various operations

// 1. Arithemetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators - Statement

// 1. Arithemetic Operators - used to perform mathemtical calculations
       // 1. Addition (+) - Addition or concatenation
       // 2. Subtraction (-)
       // 3. Multiplication (*)
       // 4. Division (/)
       // 5. Modulus (%) - Remainder
       // 6. Exponential (**) - Power
       // 7. Increment (++)  - Increses the value by 1
       // 8. Decrement (--) - Decreases the value by 1


let number1 = 10
let number2 = "3"

// 1. Addition (+) - Addition or concatenation
console.log("Addition :", number1 + number2)


// 2. Subtraction (-)
console.log(number1- number2)

// 3. Multiplication (*)
console.log(number1 * number2)

// 4. Division (/)
console.log(number1/number2) 

// 5. Modulus (%) - Remainder after division
console.log(number1 % number2) // 10/3 - 9/3 - 1

// 6. Exponential (**) - Power
console.log(number1 ** number2) // 10**3 = 10^3 // 10*10*10

// 7. Increment (++) - Increases the value by 1

let num4 = 10
// num4++ or ++num4
// pre-increment (++num4) - First the value will be incremented and the action will be performed.
console.log(++num4) // ++10// 10+1 = 11

// Post-increment (num4++) - First the action will be performed and then the value will be incremented

let num5 = 5
console.log(num5++) //5  5++ // 5+1 
console.log(num5) // 6


// 8. Decrement (--) - Decrease the value by 1

// pre-decrement (--num4) - First the value will be decremented and the action will be performed.
// Post-decrement (num4--) - First the action will be performed and then the value will be decremented

let num6 = 15
let num7 = 20

console.log(num6--) // 15
console.log(--num6) // 13


// loops - for, while, do while

console.log("********************************")

// 2. Comparison Operators - Used to compare two value and return boolean value (true/false)
   // 1. Equal to (==)
   // 2. Not Equal to (!=)
   // 3. Strict Equal to (===)
   // 4. Strict Not Equal to (!==)

   // 5. Greater than (>)
   // 6. Greater than or equal (>=)
   // 7. Less than (<)
   // 8. Less than or equal (<=)


// 1. Equal to (==) - Check if the two VALUES are same or not

let num9  = 10
let num10 = "10"
console.log(num9 == num10) // true

// Type conversion and Type coercion
// Type Conversion - Is a process of converting ine datatype into other by explictly mentioning the datatype - Number(num10)

// Type Coercion - Implicite conversion of one datatype into other datatype

// 2. Not Equal to (!=) - Check if the two VALUES are not same

console.log(num9 != num10) 

// 3. Strict Equal to (===) - Check if the two VALUES are same along with the DATATYPE should be same for the variables.

console.log(num9 === num10)  // false

// 4. Strict Not Equal to (!==) 

// 5. Simple assignment to complete >, >=, < and <=

console.log(10 > 7)

// typeof


// 3. Logical Operator - Used the combine multiple conditions to get the final result. The result sould always be in the form boolean (true/false)

     // 1. AND (&&) - Both of the condition should be true to get the result as true
     // 2. OR (||) - Either of the condition is true, it will return true
     // 3. Logical NOT (!) - It will reverse the result of condition from true to false and vice versa

     // 1. AND (&&)

     // true && true - true
     // true && false - false
     // false && true - false 
     // false && false - false


     console.log("AND (&&)", (10>6) && (12>5));
     console.log("AND (&&)", (10>6) && (12>50));
     console.log("AND (&&)", (10>60) && (12>5));
     console.log("AND (&&)", (10>60) && (12>50));


 // OR (||) - 

     // true || true - true
     // true || false - true
     // false || true - true 
     // false || false - false

     console.log("OR (||)", (10>6) || (12>5));
     console.log("OR (||)", (10>6) || (12>50));
     console.log("OR (||)", (10>60) || (12>5));
     console.log("OR (||)", (10>60) || (12>50));


// 3. Logical NOT (!) - reverse the result

console.log(!("String" === "String"))
console.log(!false);


// 4. Assignment Operator - Assing the value to a variable

let i = 30

// what is difference between =, ==, ===



