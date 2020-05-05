Array.prototype.map2 = function(callback){
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index],index,this))    
    }
    return newArray
}
const numeros = [1,2,3,4,5]

const soma10 = function(e) { return e + 10}

let resultado = numeros.map2(soma10)

console.log(resultado)
console.log(numeros)