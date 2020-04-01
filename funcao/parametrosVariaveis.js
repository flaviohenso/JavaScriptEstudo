function soma(){
    let soma = 0
    for (const key in arguments) {
        soma += arguments[key]
    }
    return soma
}

console.log(soma(1))
console.log(soma(1,2))
console.log(soma(1.1,4,3.4))