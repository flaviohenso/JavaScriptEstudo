(function(){
    const numero = [1,2,50,15,8,55,100,10875,27,45,44,10]

    numero.forEach(element => {
        console.log(element % 2 === 0 ? 'Número Par' : 'Número Impar')
    });

})()