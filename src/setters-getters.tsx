class People{
    b:number;
    a:number;

    constructor(b:number,a:number){
        this.b = b
        this.a = a
    }

    public getCommunity(){
        
    }
}

class guys extends People{
    get anything(){
        return this.a
    }
    set anything(value:number){
        this.a = value
    }
}

const point = new guys(44,80)

console.log(point.anything)