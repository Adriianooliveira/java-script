function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iano')
    var res = window.document.getElementById('res')
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var hsex = window.document.getElementsByName('mf')
        var idade = ano - Number(fano.value)
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (hsex[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-h1.jpg')

            } else if (idade <= 20) {
                img.setAttribute('src', 'foto-jovem-h1.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-h1.jpg')

            } else {
                img.setAttribute('src', 'foto-idoso-h1.jpg')

            }
            
        } else if (hsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade <= 10) {

            } else if (idade <= 20) {

            } else if (idade < 50) {

            } else {

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}