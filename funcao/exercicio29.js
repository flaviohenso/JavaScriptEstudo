const numeros = [1,3,5,6,4,10,13,69,45,25,20,16,17,19,12,11,59,100]
const contagem = () => {
    let dentro = 0
    let fora = 0
    for (const indice in numeros) {
        if ( numeros[indice] >= 10 && numeros[indice] <= 20){
            dentro++
        }else {
            fora++
        }
    }
    return `Existem ${fora} fora do intervalo [10,20] e ${dentro} dentro do intervalo`
}

console.log(contagem())
