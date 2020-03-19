console.log(typeof console)

console.log(Math.ceil(6.11))
const obj1 = {}
obj1.nome = 'Bola'
obj1['nome2'] = 'Bola2'
console.log(obj1)

function Obj(nome) {
    this.nome = nome
    this.func1 = function() {
        console.log('Exec...' + this.nome)
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.func1()