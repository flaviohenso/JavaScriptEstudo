const crescimento = (crianca1,crianca2) => {

    let resultado
    if (crianca1.altura < crianca2.altura) {
        resultado = 'Criança 1 é menor que a Criança 2'
        if(crianca1.taxa > crianca2.taxa){
            return `${resultado}, mas criança 1 vai ultrapassar a Criança 2 em ${taxaDeCrescimento((crianca1.taxa - crianca2.taxa),
                (crianca2.altura - crianca1.altura))} anos`
        } else {
            return `${resultado}, e de acordo com a taxa de crescimento não ira ultrapassar a criança 2.`
        }
    }else if (crianca1.altura > crianca2.altura) {
        resultado = 'Criança 2 é menor que a Criança 1'
        if(crianca1.taxa < crianca2.taxa){
            return `${resultado}, mas criança 2 vai ultrapassar a Criança 1 em ${taxaDeCrescimento((crianca2.taxa - crianca1.taxa),
                (crianca1.altura - crianca2.altura))} anos`
        }else {
            return `${resultado}, e de acordo com a taxa de crescimento não ira ultrapassar a criança 1.`
        }
    } else {
        resultado = 'As crianças são do mesmo tamanho'
        if(crianca1.taxa > crianca2.taxa){
            return `${resultado}, mas criança 1 vai ultrapassar a Criança 2 em ${taxaDeCrescimento((crianca1.taxa - crianca2.taxa),
                (crianca2.altura - crianca1.altura))} anos`
        }else if(crianca1.taxa < crianca2.taxa){
            return `${resultado}, mas criança 2 vai ultrapassar a Criança 1 em ${taxaDeCrescimento((crianca2.taxa - crianca1.taxa),
                (crianca1.altura - crianca2.altura))} anos`
        } else {
            return resultado += ' e possuem a mesma taxa de crescimento'
        }
    }
}

const taxaDeCrescimento =  (dif_taxa,dif_altura) => {
    return (dif_altura / dif_taxa) + 1
}

const crianca1 = {
    altura: 120,
    taxa: 10
}

const crianca2 = {
    altura: 119,
    taxa: 11
}

console.log(crescimento(crianca1,crianca2))