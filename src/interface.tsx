//type aliases and interfaces

//type aliases
//way to group define variables

type Fruits ={
    color:String,
    shape:String,
    price:number
}

//cannot add values

interface People {
    name:String,
    age:number,
    gender:String,
    maritalStatue:Boolean
}

//can make a new interface and add values -- not the case for type alias

interface People{
    schools:String   
}