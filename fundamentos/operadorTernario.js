const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

const resultado1 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado1(10))
console.log(resultado1(6.5))