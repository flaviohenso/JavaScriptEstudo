const valorPlano = idade => {

    if ((idade < 10)) {
        return 'Valor do plano R$ 180,00'
    } else if ((idade >= 10 && idade <= 30)) {
        return 'Valor do plano R$ 150,00'
    } else if ((idade > 30 && idade <= 60)) {
        return 'Valor do plano R$ 195,00'
    } else {
        return 'Valor do plano R$ 230,00'
    }
}

console.log(valorPlano(90))