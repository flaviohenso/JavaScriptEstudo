const recorde = (pontuacao) => {
    const array = pontuacao.split(' ')
    console.log(array)
    let i = 0
    let posicao = 0
    let resultadoRuim = 0
    for (const key in array) {
        if (key < 1) {
            resultadoRuim = array[key]
            continue
        } else {
            //array.some(elem => {
               // if (elem > array[key]) {
                    //i++
                //}
            //})
            if (Number(array[key]) > Number(array[posicao])){
                posicao = key
                i++
            }
            if (Number(array[key]) < Number(resultadoRuim)) {
                resultadoRuim = array[key]
            }
        }
    }

    return {
            record : `O recorde foi superado ${i} vezes`,
            piorResultado : `O pior resultado foi ${resultadoRuim}`
    }
}

console.log(recorde("10 20 20 8 25 3 0 30 -1"))