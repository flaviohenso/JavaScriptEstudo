let contador = 1

while(contador <= 10){
    console.log('Contador: '+ contador)
    contador++
}

for (let index = 0; index <= 10; index++) {
    console.log(`Index: ${index}`)
}

const notas = [6.7,7.4,9.8,8.1,7.7]

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    console.log(`notas[${index}] = ${element}`)    
}