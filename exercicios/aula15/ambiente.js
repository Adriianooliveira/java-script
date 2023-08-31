let num = [4 , 6, 3, 9, 5 ]
num.sort()
num.push(1)
console.log(num)
console.log(`o valor tem ${num.lengthk} posiçoes`)
console.log(`o primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(10)
if (pos === -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`o valor 4 esta na posição ${pos}`)
}





// let num = [1, 2, 3, 4]
// num[3] = 6      [1, 2, 3, 6]
// num.push(7)     [1, 2, 3, 4, 7]
// num.length      Sao os elementos 
// num.sort()
// num.indexOf(2)  ele vai procurar no vetor aonde esta o valor 2. Caso ele nao encontre ele vai retornar o valor -1
