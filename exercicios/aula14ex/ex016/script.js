function contar() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pass = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pass.value)

    if (ini.value.length === 0 || fim.value.length === 0 || pass.value.length === 0) {
        res.innerHTML = 'Impossivel contar'

    } else {
        res.innerHTML = 'Contando: </br>'

        if (p <= 0) {
            window.alert('Passo invalido considerando o passo 1')
            p = 1

        }

        if (i < f) {
            //contagem crescente

            for(var n = i; n <= f; n = n + p) {
                res.innerHTML += `&#x1f449 ${n} `

            }
            res.innerHTML += '&#x1f3c1'


        } else if (i > f) {
            //contagem regressiva

            for ( var n = i ; n > f ; n = n - p) {
                res.innerHTML += `&#x1f449 ${n}`

            }
            res.innerHTML += '&#x1f3c1'

        }
    }
}