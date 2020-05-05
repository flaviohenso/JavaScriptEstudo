const quaseArray = {
    0: 'flavio',
    1: 'Andreia',
    2: 'Fabio'
}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafaeul', 'Ana', 'Joao']

console.log(quaseArray.toString(), meuArray)