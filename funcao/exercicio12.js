const fatorial = fator => {
    let element = fator
    for (let index = 1; index < fator; index++) {
        element = index * element      
   }
    return element
}

console.log(fatorial(15))