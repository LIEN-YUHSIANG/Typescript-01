"use strict";
// Interface
let add;
add = (n1, n2) => {
    return n1 + n2;
};
// Implement interface to class, we can implement multiple interface at once
class Person {
    // Optional parameter by adding `?` after the parameter
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        console.log("Hi!");
    }
}
// we can use the interface we creaet as a type to type check objects
let user1;
user1 = new Person();
user1.greet(`Hi there, I'm`);
console.log(user1);
