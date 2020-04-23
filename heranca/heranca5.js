console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('flavio'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log(['b', 'c', 'a'].first())

String.prototype.toString = function () {
    return 'Deu muito errado!'
}

console.log('Ola mundo'.reverse())