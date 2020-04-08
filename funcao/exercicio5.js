function receberDinheiro (moeda, valor) {
    if(!isNaN(valor)){
        valor = (moeda + ' ' + (valor.toFixed(2))).replace('.',',')
    }
    
    console.log(valor)
}

receberDinheiro('R$',2.355)


const dinheiro = (moeda,valor) => {
    return (moeda + ' ' + parseFloat(valor).toFixed(2)).replace('.',',')
}

console.log(dinheiro('R$',2.3555))

const pagamento = (valor,moeda) => {
    return moeda + ' ' + Number(parseFloat(valor).toFixed(2)).toLocaleString('pt-BR')
}

console.log(pagamento(2.35555,'R$'))

//outro forma de fazer o truncamento
var arredonda = function(numero, casasDecimais) {
    casasDecimais = typeof casasDecimais !== 'undefined' ?  casasDecimais : 2;
    return +(Math.floor(numero + ('e+' + casasDecimais)) + ('e-' + casasDecimais));
  };

console.log(arredonda(2.355,2))