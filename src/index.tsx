const projectName = (name:string) =>{
    console.log(name)
}

projectName("Great typsescripted")

//void functions - Finish the function
//never functions - Doesnt finish the function in terms of the return value

const sum = (a:number,b:number):void =>{
    let c = a + b
}

const ForeverLoop = ():never =>{
    while(true){
        console.log("typescripted")
    }
}