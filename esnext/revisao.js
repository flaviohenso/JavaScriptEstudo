{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

const [...array] = "flavio"
console.log(array)

const { nome: name , idade: i } = { nome: "flavio", idade: 33}
console.log(i,name)

//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3, d: 4}
console.log(Object.values(obj))
console.log(Object.entries(obj))

class animal {}
class Cachorro extends animal {
    falar(){
        return "AU AU..."
    }
}

console.log(new Cachorro().falar())