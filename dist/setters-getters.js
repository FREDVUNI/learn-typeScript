"use strict";
class People {
    constructor(b, a) {
        this.b = b;
        this.a = a;
    }
    getCommunity() {
    }
}
class guys extends People {
    get anything() {
        return this.a;
    }
    set anything(value) {
        this.a = value;
    }
}
const point = new guys(44, 80);
console.log(point.anything);
