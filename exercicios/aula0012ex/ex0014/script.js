function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'imagem/fotomanha.png'
        window.document.body.style.background = 'rgba(196, 177, 7, 0.795)'
    } else if (hora >=12 && hora <= 18) {
        img.src = 'imagem/fototarde1.jpg'
        window.document.body.style.background = 'rgba(196, 135, 5, 0.959)'
    } else {
        img.src = 'imagem/fotonoite1.jpg'
        window.document.body.style.background = 'rgba(9, 1, 85, 0.918)'
    }

}