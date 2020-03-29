//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,1,4,56,7)
imprimirSoma()

function soma(a, b = 0){
    return a+b
}

console.log(soma(2,3))
console.log(soma(4))
console.log(soma())