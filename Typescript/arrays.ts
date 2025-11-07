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

// Property
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

console.log("************ Methods of an array******************");

let array5 = ["Orange", "Apple", 10,20,30,40,50, true]
console.log(array5);

// 1. push(ele1, ele2, ele3)- Add the elements to the end of array
// Syntax:
// arrayName.push() 

array5.push(100,200, "JS")
console.log("Push", array5);

// 2. pop() - Removes the last element from an array
// Syntax:
// arrayname.pop()
console.log(array5.pop());
console.log("pop", array5);

// Difference between push() and unshift() method
// Difference between pop() and shift() method

// 3. unshift(parameters,...) - Adds the elements to the beginning of an array
// Syntax:
// arrayName.unshift(arguments,...)

array5.unshift("TS",799)
console.log("unshift()", array5);

// 4. shift() - Removes the first element from an array
// Syntax:
// arrayName.shift()
array5.shift()
console.log(array5);

let arr1 = [10,20,30,40,50,60, "TS", 50,60,50]

// Difference between splice() and slice()

// 5. splice(startIndex, deleteCount, ele1, ele2,....)
// Syntax:
// arrayName.splice(startIndex, deleteCount, ele1, ele2,....)

// startIndex - The position where you want to add/delete the element
// deleteCount - The number of element that you want to deletefrom an array at the startIndex
// ...items - The element that you want to add at the startIndex

arr1.splice(2, 1, 23,"pink",56)
//let arr1 = [10,20,23,34,56,40,50,60]
console.log("splice()", arr1);

// 6. slice(startIndex?, endIndex?) - Return the portion of an array beteen the start and endIndex
// Syntax:
// arrayName.slice(startIndex, endIndex)

// startIndex - The position where you want to start the slice
// endIndex(Exclusive) [endIndex-1] - The position where you want to end the slice
//  [ 10, 20, 23, 'pink', 56 , 40, 50, 60, 'TS']
console.log(arr1.slice(3,7)); // 3,4,5
console.log(arr1.slice(3));
let arr2 = [10,20,30,40,50]
console.log("Slice", arr2.slice().reverse());
console.log(arr2);


// 7. indexOf(element, startIndex?) - Return the index of first occurances of na element.
// synatx:
// arrayName.indexOf(element, startIndex)
console.log(arr1);
console.log(arr1.indexOf(500))


// Take an array which have an element alteast repeated for 3-4 times. Write a program to find the number of that particular is available inside 

// 1. [10,20,30,40,50,10,90,100,10,300,10,400,10] - to find number of times 10 appeared in this array

// 2. 

// 1. To find out the first duplicate element from an array