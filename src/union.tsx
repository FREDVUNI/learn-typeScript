let id: number | string | boolean
//can assign different types to single variable --union type variant

// id = "234"
// id= 2446
id = true

let accountDetails = (name:string ,id:number) =>{
    console.log(`The name is ${name} and id ${id}`)
}

accountDetails("thenamehere",868)

function printId(id:string | number){
    console.log(id)
}

printId(5647)