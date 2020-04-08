function anobissexo(ano) {
    if (ano % 100 === 0) {
        console.log('Não é um ano bissexto')
        return true
    } else if (ano % 400 === 0) {
        console.log('É um ano bissexto')
        return true
    } else if (ano % 4 === 0) {
        console.log('É um ano bissexto')
        return true
    }else {
        console.log('Não é um ano bissexto')
        return false
    }
}

console.log(anobissexo('3000'))