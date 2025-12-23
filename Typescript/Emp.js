class Emp{

    static company = "ABC"

    constructor(id, name, age, empSalary, offer)
    {
        this.empId = id // emp.empId = 101
        this.empName = name // emp.empName = "Rahul"
        this.empAge = age  // emp.empAge = 30
        this.empSalary = empSalary // emp.empSalary = 1000000
        this.offer = offer
    }

    employeeInformation(){
        console.log(`Employee Id: ${this.empId}, Employee Name: ${this.empName}, Employee Age: ${this.empAge}, Employee Salary: ${this.empSalary}, Offer: ${this.offer}`);
    }

    static displayCompanyName(){
        console.log(Employee.company);
    }
}