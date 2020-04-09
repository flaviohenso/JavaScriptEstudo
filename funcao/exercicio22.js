const anuidade = (mes,valor) => {

    return `R$ ${Number((valor * (1 + 0.05) ** (mes - 12)).toFixed(2)).toLocaleString('pt-BR')}`

}

console.log(anuidade(0,50))