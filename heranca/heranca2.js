//cadei de prototupos (prototyoe chain)

Object.prototype.attr0 = '0' //nao recomendado

const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelera(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 300,
    __proto__: carro
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelera(50)
console.log(ferrari.status())
volvo.acelera(10)
console.log(volvo.status())
