function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000) //dispara uma outra funçao de acordo com o intervalo
}


function Pessoa2(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000) //dispara uma outra funçao de acordo com o intervalo
}

new Pessoa
new Pessoa2