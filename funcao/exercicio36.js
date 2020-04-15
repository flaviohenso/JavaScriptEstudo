function funcao1(vetor, numero) {
    let resultante = []
    vetor.forEach(element => {
        resultante.push(element * numero)
    });
    
    return resultante
}

function funcao2(vetor, numero) {
    let resultante = []
    vetor.forEach(element => {
        if (element > 5) {
            resultante.push(element * numero)
        }
    });
    return resultante
}

let numerosInteiros = [-5,-6,-4,-8,1,2,3,4,5,3,4,7,9,8,4,6,2,1,5,8,9]


console.log(funcao2(numerosInteiros,3))