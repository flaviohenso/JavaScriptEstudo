const caracteres = (string1, string2) => {

    let arrayString1 = Array.from(string1.toUpperCase())
    let arrayString2 = Array.from(string2.toUpperCase())
    let retorno = true

    if (arrayString2.length === arrayString1.length) {
        arrayString2.filter(function (elem) {
            if (retorno != false) {
                if (arrayString1.indexOf(elem) === -1)
                    retorno = false
            }
        })

        /* if (retorno != true) {
            retorno = true
            arrayString1.filter(function (elem) {
                if (retorno != false) {
                    if (arrayString2.indexOf(elem) === -1)
                        retorno = false
                }
            })
        } */


    } else {
        retorno = false
    }
    console.log(retorno)
}

caracteres('Hum', 'H um')