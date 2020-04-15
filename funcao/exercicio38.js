const intervalo = (inicio = 0, fim = 100) => {

    if (fim < inicio) {
        let aux = fim
        fim = inicio
        inicio = aux
    }

    for (let inicio = 0; inicio < fim; inicio++) {
        if (inicio % 2 != 0) {
            console.log(inicio)
        }
    }
}

intervalo(0,100)