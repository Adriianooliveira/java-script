var idade =  64
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('voce nao vota')
} else if (idade < 18 || idade >= 65){
    console.log('seu voto e opcional')

} else if (idade >= 18){
    console.log('seu voto e obrigatorio')
}