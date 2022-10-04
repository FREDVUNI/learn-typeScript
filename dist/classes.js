"use strict";
class Person {
    constructor(x, y) {
        //available to all methods
        this.x = x;
        this.y = y;
    }
    getAge() {
        let age = 67;
        console.log(age);
    }
}
class community extends Person {
}
//instance of a class Person
const people = new Person(56, 80);
console.log(people);
//public - all
//protected - just to the class of assignment or declarartion
//private  - cant use it anywhere else
