let num = window.document.querySelector('input#val')
let lista = window.document.querySelector('select#sel')
let res = window.document.querySelector('div#res')
var valores = []

function Numero(n) {
    if(Number(n >= 1) && Number(n <= 100)) {
        return true
    } else {
        return false 
    }

}

function iliste(n, v) {
    if(v.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }
}

function adicionar() {
    if(Numero(num.value) &&  !iliste(num.value, valores)) {
        window.alert('tudo ok')

    } else {
        window.alert('valor inválido ou já encontrádo na lísta')
    }
}