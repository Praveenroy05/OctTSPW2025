// Class - Blueprint to create an object
// ES6 - ECMA Script - 2015

// Syntax:

// Class is a collection of Proporties and methods
// Classname should be similar to the filename (Employee.ts). Class name should start with capital letter.
// Access Modifier - It is permission to access a variable and method

// let i =10

/*

class ClassName {
     // Properties - variable - Locators (in Playwright)
    key: datatype 
    private key1 : datatype 
    readonly key2 : datatype
    static key3 : datatype = "ABC"

    // this - Referes to the current class Object

    // Constructor - 
    constructor(key:datatype, key1:datatype, key2:datatype){

      this.key =  key // key = 1
      this.key1 = key1 // key1 = 2
      this.key2 = key2 // key2 = 3
        
    }

    // methods - function - Action - loginIntoApplication(in Playwright)

    // function functioname(){}
    employeeInformation()
     {
     }
    static displayCompanyName(){}

}

const obj = new ClassName(1,2,3)
const obj1 = new ClassName(4,5,6)

obj.key
obj.employeeInformation()

ClassName.displayCompanyName()
ClassName.key3



1. constructor - special method - used to initialize the properties of the class. It should be created with a keyword as "constructor" only.
2. "this" keyword - It is a reference variable that referes the current class object.
3. "static" keyword - It belongs to the class rather than object of a class. That means to access the static proerties and method we have to access using the ClassName. Ex: - ClassName.key3, ClassName.displayCompanyName()
4. non-static - It belongs to the object of a class. To access the non-static proerties and methods we have to create the object of a class. Ex: - obj.key1, obj.info()
5. "private" keyword - It is an access modifier. It is used to restrict the access of a variable and method within the class only. It can not be accessible outside of the class.
6. "readonly" keyword - It is used to declare a variable as read-only. It can be initialized only once either at the time of declaration or in the constructor of the class. After that it can not be modified.
7. Properties declaration inside the class is mandatory in TS but not mandatory in JS.

// import - export


*/


export class Employee{

    empId : number
    empName: string
    empAge : number
    private empSalary
    readonly offer 
    static company = "ABC"

    constructor(id, name, age, empSalary, offer)
    {
        this.empId = id // emp.empId = 101
        this.empName = name // emp.empName = "Rahul"
        this.empAge = age  // emp.empAge = 30
        this.empSalary = empSalary // emp.empSalary = 1000000
        this.offer = offer
    }

    employeeInformation() :void{
        console.log(`Employee Id: ${this.empId}, Employee Name: ${this.empName}, Employee Age: ${this.empAge}, Employee Salary: ${this.empSalary}, Offer: ${this.offer}`);
    }

    static displayCompanyName(){
        console.log(Employee.company);
    }
}

const emp = new Employee(101, "John", 40, 100000, 20000)
const emp1 = new Employee(102, "Rahul", 30, 1000000, 200000)
const emp2 = new Employee(101, "Joe", 25, 10000000, 2000000)

console.log(emp.empName);
console.log(emp1.empName);
console.log(emp2.empName);
// emp.empSalary
// emp.offer = 20000
emp.empAge = 20
Employee.displayCompanyName()

emp.employeeInformation()