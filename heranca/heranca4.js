function meuObjeto() {}

console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === meuObjeto.prototype)
console.log(typeof meuObjeto.prototype)

meuObjeto.prototype.nome = 'flavio'
meuObjeto.prototype.falar = function() {
    return `meu nome é ${this.nome}`
}

console.log(obj1.falar())
obj1.nome = 'fabio'
console.log(obj1.falar())
obj2.nome = 'andria'
console.log(obj2.falar())

const obj3 = {}

obj3.__proto__ = meuObjeto.prototype
console.log(obj3.falar())

//resumo
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)