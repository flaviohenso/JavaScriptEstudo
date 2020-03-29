function imprimirResultado(num){
    if(num > 7){
        console.log('Aprovado!')
    } else if (num > 6){
        console.log('Em Recuperação')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(6.99)
imprimirResultado(5)

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado2 = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7,8.99)) {
        console.log('Aprovado')
    }else if(nota.entre(4,6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else {
        console.log('Nota invalida')
    }
}

imprimirResultado2(10)
imprimirResultado2(1)
imprimirResultado2(7)
imprimirResultado2(5)
imprimirResultado2(-1)
imprimirResultado2(11)