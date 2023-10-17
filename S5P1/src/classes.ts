// Code goes here!

// Create a Class
abstract class Department {
  // Create static field
  static fiscalYear = 2020;
  protected employees: string[] = [];

  // Shorthand Initialization
  constructor(protected id: string, public name: string) {
    // constructor function
    // this.name = n;
  }

  // Create a static method, which is noly accessible by the class
  static createEmployee(name: string) {
    return { name: name };
  }

  // Set class to abstract class and add abstract method
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2"; // This will have an error
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Create new class inherit from Department using `extends` and `super()`
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  // getter method
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  // Override a method
  describe() {
    console.log(`Accounting Department - ID ` + this.id);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printRepostrs() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const IT = new ITDepartment("d1", ["Max"]);

IT.addEmployee("Max");
IT.addEmployee("Manu");
IT.printEmployeeInfo();
console.log(IT);
IT.describe();

// Set constructor function to private will make this code invalid
// const accounting = new AccountingDepartment("d2", []);

// New way to create an object base on AccountingDepartment follow the singleton pattern
const accounting1 = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting1, accounting2); // These two will be the same object

// Access setter just like properties
// accounting.mostRecentReport = "Your end report";

// accounting.addReport("Sth went wrong...");
// // Access getter just like properties
// console.log(accounting.mostRecentReport);
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// // accounting.printEmployeeInfo();
// // accounting.printRepostrs();
// accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// The `this` keyword is point to accountingCopy so we can't get the `name` property
// inside the Department class.
// accountingCopy.describe();
