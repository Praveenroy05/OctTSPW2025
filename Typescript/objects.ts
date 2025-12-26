// Objects - {key:value} -

// 1. Object literal - {key: value} - 
// 2. Class - Object - 2015 - ES6 - ECMA SCRIPT 6

// 1. Object Literal - {}

// Syntax:

/*

const obj = {key: value, key1:value1,...}

// There are 2 ways in which we can fetch the value from object literal
// 1. obj.key
// 2. obj["key"]

// Note : key will be stored internally in the form of string

*/

const human =
{
    name : "Rahul",
    age : 40,
    gender : "male",
    salary : 100000,
    address : {
        streetNo : 3,
        city : "NY"
    },
    skills : ["java","Python"]
}

// 1. Fetching the value from Object
// 1. obj.key


console.log(human.age)

//2. obj["key"]

console.log(human["age"]);


// city
console.log(human.address);

console.log(human.skills[1]);

// Class - 