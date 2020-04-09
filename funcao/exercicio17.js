const novoSalario = (salarioAtual, plano) => {

    switch (plano) {
        case `A`:
            return salarioAtual += (salarioAtual * 0.1)
        case `B`:
            return salarioAtual += (salarioAtual * 0.15)
        case `C`:
            return salarioAtual += (salarioAtual * 0.2)
        default:
            return `Plano é inválido`
    }
}

console.log(novoSalario(1000,`C`))