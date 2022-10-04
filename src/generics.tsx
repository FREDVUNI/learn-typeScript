let arrNum = [1,23,45,678,67,89,34,35,78,334,566,77,45,78,33,774,33,2,4478,33,5]

function getRandomNumbers(arr:number[]){
    let index = Math.floor(Math.random() * arr.length) 
    return arr[index]
}

console.log(getRandomNumbers(arrNum))