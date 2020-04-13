(function(){
    const numeros = [12,85,64,23,26,14,7852]
    const reducer = (total,atualElement) => total + atualElement

    console.log((numeros.reduce(reducer)/numeros.length).toFixed(2))

})()