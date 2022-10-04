class Person{
    //properties x and y
    x:number;
    y:number;

    constructor(x:number,y:number){
        //available to all methods
        this.x = x
        this.y = y
    }

    public getAge(){
        let age:number = 67
        console.log(age)
    }
}

class community extends Person{
    
}

//instance of a class Person
const people = new Person(56,80)
console.log(people)

//public - all
//protected - just to the class of assignment or declarartion
//private  - cant use it anywhere else
