var valores = [1, 3, 5 , 6, 4, 8]

/*  console.log(valores)
    console.log(`${valores[1]}`)

    for(var pos = 0; pos < valores.length; pos++) {
       console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}