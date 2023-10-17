// Interface

// type Addfn = (a: number, b: number) => number;

// Interface for function
interface Addfn {
  (a: number, b: number): number;
}

let add: Addfn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;

  // define optional property by adding `?` after the property name
  outputName?: string;
}
// Extends the interface to combinde their structure
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Implement interface to class, we can implement multiple interface at once
class Person implements Greetable {
  name?: string;
  age = 30;

  // Optional parameter by adding `?` after the parameter
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    }
    console.log("Hi!");
  }
}

// we can use the interface we creaet as a type to type check objects

let user1: Greetable;

user1 = new Person();

user1.greet(`Hi there, I'm`);
console.log(user1);
