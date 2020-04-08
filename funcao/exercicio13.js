const diaUtil = dia => {
    switch (dia) {
        case 1:
            return 'Domingo final de semana'
        case 2:
            return 'Segunda-feira dia Útil'
        case 3:
            return 'Terça-feira dia Útil'
        case 4:
            return 'Quarta-feira dia Útil'
        case 5:
            return 'Quinta-feira dia Útil'
        case 6:
            return 'Sexta-feira dia Útil'
        case 7:
            return 'Sabado final de semana'
        default:
            return 'Dia inválido';
    }
}

console.log(diaUtil(7))