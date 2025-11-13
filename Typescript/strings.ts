// string - Combination of characters  - Hello, string

    /*
        1. SingleQuote ('') - String Literal
        2. DoubleQuote ("") - String Literal
        3. Backtick(``) - Template Literal

    */

    let singleQuote1 = 'This is a single quote string'         
    let doubleQuote1 = "This is a double quote string"
    let backtick1 = `This is a backtick way of string`

    let str1 = "//*[@attribute = 'xyz']"


   // "this", ''
    //'""'

    // Backtick (``) way of declaration of string:
    // 1. If you want to define multiple line string
    // 2. When you want paramterise a string - Calling other varaible inside a string
    // ${variableName}
    
    
    let multiline1 = 
    `THis
    is a multiline
    string`

    let age1 = 20

     // ${age}
    let message1 = `You are of age : ${age1}` // Data driven testing
    console.log(message1)


    // abcbacjkdsfsf - a2b2c2j1k1d1s2f2 - charAt()

    // 1. length - Return the number of characters in a string.
    // Syntax:
    // stringName.length

    let str2 ="Hello Javascript"            
    console.log(str2.length) 
    
    // 2. charAt(index) - Return the character at a specified index
    // Syntax
    // stringName.charAt(index)
    console.log(str2.charAt(0));

    // 3. concat(str1, str2) - Combine 2 or more string and return us the new string
    // Syntax:
    // stringName.concat(str1, str2)

    // 4. includes(searchString, startIndex?)
    // Syntax:
    // stringName.includes(char or string, startIndex?)

    // 5. indexOf(char or string)
    // Syntax:
    // stringName.indexOf(char of string)
    console.log(str2.indexOf('Types'))

    // 6. lastIndexOf(char or string)
    // Syntax:
    // stringName.lastIndexOf(char or string)

    // 7. slice(startIndex?, endIndex?) - Return the portion of a string between startIndex and endIndex-1

    // Syntax:
    // stringName.slice(startIndex?, endIndex?)

    //let str2 ="Hello Javascript"            

    console.log(str2.slice()); // o Jav
    console.log(str2.slice(9, 4));  // 

    // What is difference between slice() ans substring()

    // 1. StartIndex is mandatory in substring but not in slice
    // 2. If you have givem startIndex is greater than endIndex - substring reverse the index but slice will return will empty string.

    // 8. substring(startIndex, endIndex?) - Return the portion of a string between startIndex and endIndex-1
    // Syntax:
    // stringName.substring(startIndex, endIndex?)

    let str3 = "This Is A Typescript"
    console.log(str3.substring(9, 3))
    console.log(str3.slice(9, 3));

// let price = INR5000

   // 9. startsWith(searchString, position?) - Check if a string starts with the specified string or character and return the result in the form of boolean

   // Synatx:
   // stringName.startsWith(str or char)
   console.log(str3.startsWith("This")); // true
   console.log(str3.startsWith("t", 10)); // false

   // 10. endsWith(searchString, position?) - Check if a string ends with the specified string or character and return the result in the form of boolean


   // 11. toLowerCase() - It converts all the characters to a lower case character
   // syntax()
   // stringName.toLowerCase()
   console.log(str3);
   console.log(str3.toLowerCase());

   // 12. toUpperCase() -  It converts all the characters to a upper case character
   // syntax()
   // stringName.toUpperCase()
   console.log(str3.toUpperCase());

    let email = "praveen@qamitra.com"

   // 13. split(separator) - Split a string into multiple string using the specified separator and return them as an array
   // syntax()
   // stringName.split(separator)
   console.log(email.split("$"));

   // 14. trim() - Removes the whitespece from the beginning and the end of a string
    // syntax()
   // stringName.trim()
   let str4 = "   Hello World   "
   console.log(str4.length);
   console.log(str4.trim().length);

   // 15. trimStart() - Removes the whitespece from the beginning of a string
   console.log(str4.trimStart().length);

   // 16. trimEnd() - Removes the whitespece from the end of a string
    console.log(str4.trimEnd().length);

    