const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log('Quadro de honra')
            break
        case 9: case 8:
            console.log('Qaudro de Honra')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(0)
imprimirResultado(-1)