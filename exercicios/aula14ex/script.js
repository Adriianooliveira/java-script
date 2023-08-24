function contar() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pass = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pass.value)

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('verifique seu codigo')

    } else {
        res.innerHTML = 'contando'

        for(var n = i; n <= f; n = n + p) {
            res.innerHTML += `${n}`

        }
    }
}