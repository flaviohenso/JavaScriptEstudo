(function(){
    const numeros = [-5,4,6,8,99,75,-15,-5,6,-6,-485,-1]
    let i = 0

    numeros.forEach(element => {
        if (element < 0){
            i++
        }
    });

    console.log('Total de números negativos: ' + i)

})()