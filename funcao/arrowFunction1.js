let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno implicito

console.log(dobro(Math.PI))

let msgOla = function () {
    return 'Ola'
}

msg = () => 'Ola!'

msg1 = _ => 'Ola mundo!'

console.log(msgOla())
console.log(msg())
console.log(msg1())