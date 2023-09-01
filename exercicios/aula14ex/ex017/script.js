function tabuada() {
    var num = window.document.getElementById('num')
    var tabuada = window.document.getElementById('itabuada')

    if(num.value.length === 0) {
        window.alert('verifique seu codigo')

    } else {
        var nm = Number(num.value)
        var n = 1
        tabuada.innerHTML = ''
        while (n <= 10) {
            var item = window.document.createElement('option')
            item.innerHTML += `${nm} x ${n} = ${nm*n}`
            item.value = `tab${nm}`   
            tabuada.appendChild(item)
            n++
        }
    }
}