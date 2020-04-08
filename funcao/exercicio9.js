const calculaNota = nota => {
    if (!isNaN(nota)) {
        if (nota < 38) {
            console.log(`Reprovado! Sua Nota é ${nota}`)
        } else {
            let multiplo = 0
            let notaMultiplo = 0
            if (nota % 5 != 0) {
                multiplo = Math.trunc(nota / 5) + 1
            } else {
                multiplo = nota / 5
            }

            notaMultiplo = multiplo * 5

            if (notaMultiplo - nota < 3) {
                nota = notaMultiplo
            }
            console.log(`Voçê foi aprovado com a nota ${nota}`)
        }
    } else { 
        console.log('Não é um número!')
    }
}

calculaNota("95")