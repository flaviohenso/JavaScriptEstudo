const resultado = (base,expoente) => {
    let i = 1
    let valor = base
    while (i < expoente) {
        valor *= base 
        i++
    }
    return valor
}

console.log(resultado(8,3))

function exponecial(a,b) {
    return a**b
}

console.log(exponecial(8,3));

const resultadoExp = (a,b) => a**b
console.log(resultadoExp(8,3))