var amigo = {nome: 'Adriano', sexo: 'masculino', peso: 78.7, engordar(g=0) {
    console.log(`voce engordou`)
    this.peso += g
}}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)