const contaCedula = valor => {
    const cedulas = [100, 50, 10, 5, 1]

    let notasCem = 0
    let notasCiquenta = 0
    let notasDez = 0
    let notasCinco = 0
    let notasUm = 0
    let found = 0

    do {
        found = cedulas.find(element => element <= valor);
        switch (found) {
            case 100:
                notasCem++
                valor -= 100
                continue
            case 50:
                notasCiquenta++
                valor -= 50
                continue
            case 10:
                notasDez++
                valor -= 10
                continue
            case 5:
                notasCinco++
                valor -= 5
                continue
            case 1:
                notasUm++
                valor -= 1
                continue
        }

    } while (found != undefined);

    if (notasCem !== 0) {
        console.log(`${notasCem} notas de R$ 100.`)
    }
    if (notasCiquenta !== 0) {
        console.log(`${notasCiquenta} notas de R$ 50.`)
    }
    if (notasDez !== 0) {
        console.log(`${notasDez} notas de R$ 10.`)
    }
    if (notasCinco !== 0) {
        console.log(`${notasCinco} notas de R$ 5.`)
    }
    if (notasUm !== 0) {
        console.log(`${notasUm} notas de R$ 1.`)
    }
}

contaCedula(18)