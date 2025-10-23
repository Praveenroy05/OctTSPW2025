// Datatypes - Which defines what kind of data a variable is storing

// 2 types of data types

// 1. Primitive data types  - Only one values
     // 1. number
     // 2. string
     // 3. boolean
     // 4. null
     // 5. undefined

     // 6. any
     // 7. union (|)
     // 8. void - Function
     

    // 1. number - Combination of both integer (90, -34) and floating point number (45.34, 435435.5645775)

    // Syntax:
    // keyword(let/const) variableName : datatype(Optional) = value

    let num :number = 30
    let num1 = 345345.5767

    // typeof operator- Which helps us in identifying the data type of a variable

    console.log(typeof num1)

    // What is difference between Type Annotation and Type Inference

    // Whenever you define the data type of variable explicitly is known as Type Annotation. Only possible in Typescript
    // let num : number = 10

    // When JS/TS is able to identify the datatype of a variable implicitly (Depending on the value that you have stored inside variable) is known as Type Inference
    // let num2 = 2434.456


    // 2. string - Combination of characters  - Hello, string

    /*
        1. SingleQuote ('') - String Literal
        2. DoubleQuote ("") - String Literal
        3. Backtick(``) - Template Literal

    */

    let singleQuote = 'This is a single quote string'         
    let doubleQuote = "This is a double quote string"
    let backtick = `This is a backtick way of string`

    let str = "//*[@attribute = 'xyz']"


   // "this", ''
    //'""'

    // Backtick (``) way of declaration of string:
    // 1. If you want to define multiple line string
    // 2. When you want paramterise a string - Calling other varaible inside a string
    // ${variableName}
    
    
    let multiline = 
    `THis
    is a multiline
    string`

    let age = 20

     // ${age}
    let message = `You are of age : ${age}` // Data driven testing
    console.log(message)


    // 3. boolean - true or false
    let isAdmin = true
    let isUser = false


    // 4. null - Intentional absense of a value
    let apiResponse : string | null= null
    apiResponse = "apiCall()"

    // 5. undefined - Whenever you do not define the value of a varaible. You have declared a variable but you have not assigned any value to that specific variable.

    let testVariable 
    console.log(testVariable)

    // 6. any - Any type of data can be assigned
    // Migrating the project from JS to TS
    // If you are not aware of the data type of a varaible.

    let a1 :any = 10
    a1 = "TS"
    a1 = true
    a1 = null
    a1 = undefined

    // 7. (|) - Allows a variable to accept more than one data type

    let a2 : string | undefined |number = "TS"
    a2 = undefined
    a2 = 34
    //a2 = true

    // 8. void - Nothing

    function add(){
        console.log("This is a function")
       // return "5"
    }

    let user = "name"
    let USER = "Rahul"



// 2. Non -primitive data type - More than one values
    // 1. Array
    // 2. Object
    // 3. Functions