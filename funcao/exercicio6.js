class Aplicacao{
    constructor(capitalInicial,txj,tempo){
        this.capitalInicial = capitalInicial
        this.txj = txj
        this.tempo = tempo
    }

    
    jurosSimples(){
        //j=c.i.t
        //M=c+j
        let juros = (this.capitalInicial * this.txj) * this.tempo
        return this.capitalInicial + (juros)
    }

    jurosComposto(){
        //M=C(1+i)t
        return this.capitalInicial * (1 + this.txj) ** this.tempo
    }
}

console.log('Montante a juros simples no periodo de 1 mês: R$ ' + Number(new Aplicacao(1000,0.025,1).jurosSimples().toFixed(2)).toLocaleString('pt-BR'))
console.log('Montante a Juros compotos no periodo de 1 mês: R$ ' + Number(new Aplicacao(2000,0.04,1).jurosComposto().toFixed(2)).toLocaleString('pt-BR'))