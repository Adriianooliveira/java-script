function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    //var p = Number(passo.value)
    while (Number(i <= f)) {
        res.innerHTML = `contagem ${i} ${f}`
        c++

    }
}