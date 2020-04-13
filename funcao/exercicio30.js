const vetor = [2,3,1,4,6,5]
const menorMaiorValor = () => {
    console.log('Maior valor é: ' + Math.max.apply(null,vetor))
    console.log('Menor valor é: ' + Math.min.apply(null,vetor))
}

menorMaiorValor()