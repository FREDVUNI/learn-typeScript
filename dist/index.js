"use strict";
const projectName = (name) => {
    console.log(name);
};
projectName("Great typsescripted");
//void functions - Finish the function
//never functions - Doesnt finish the function in terms of the return value
const sum = (a, b) => {
    let c = a + b;
    console.log(c);
};
sum(25, 79);
const ForeverLoop = () => {
    while (true) {
        console.log("typescripted");
    }
};
//function is never going to run
// ForeverLoop()
