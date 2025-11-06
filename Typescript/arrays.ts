// Array - [10,20,30,40]

let array = [10,12,34, "TS", true, null,undefined, {name: "John"}] // index starts with 0 inside array
console.log(array);

// arrayName[index]

// [0:10,1:12,2:34, 3:"TS", 4:true, 5:null,6:undefined, 7:{name: "John"}] // [index:value]


console.log(array[5]); // 10

// There are 2 ways in which we can declare an array
// 1. Using square bracket [] - Array Literal
// 2. Using new keyword - Array Constructor - new Array()

// 1. Array Literal - []
// Syntax:

// let/const arrayName :datatype[](optional)  = [value1, value2,...]

let array1 :number[] = [12,34,5,67,89]
let array2 :any = ["TS", 12,23,true, null,100,[12,13,14]]


let array3 = []
array3[0] = 10
array3[1] = 30
array3[10] = 50
 console.log(array3[15]);

console.log(array3.length);

let arr = [10]

// isArray(variable)

console.log(Array.isArray(array1));
console.log(Array.isArray(arr));



// 2. Array Constructor - new Array()

// Syntax:
// let/const arrayName = new Array<datatype>(value1, value2, value3,....)

let array4 = new Array<any>(10, "TS")
console.log(array4);

// class Array{

//     constructor(...num:any){

//     }
// }

// new Array(12,34,56,456)



// console.log(array2[0]);
// console.log(array2[1]);
// console.log(array2[2]);
// console.log(array2[3]);

//let array2 :any = ["TS", 12,23,true, null, 90] // 6 [0-5] - [0,1,2,3,4,5]

// length - Return the total number of element in an array
console.log(array2.length);

for(let i=0; i<array2.length; i++){
    console.log(array2[i])
}

console.log("************************************");
// for ... of loop - It will iterate over the element of an array

// Syntax:

/*

for(declaration of arrayName)
{
    // code
}

*/
// let array2 :any = ["TS", 12,23,true, null,100]

let count =0
for(let element of array2){
   count++
   console.log(element);
   if(count==3){
     break
   }
}







