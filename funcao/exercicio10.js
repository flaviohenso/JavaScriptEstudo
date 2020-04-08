console.log((function (numero) {
    if (numero % 3 === 0){
        console.log(`é divisivel por 3`)
        return true
    }else {
        console.log(`Não é divisivel por 3`)
        return false
    }
})(2745))