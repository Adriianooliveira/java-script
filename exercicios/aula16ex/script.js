var num = window.document.getElementById('val')
var lista = window.document.querySelector('select#lista')
var res = window.document.getElementById('res')
var valores = []

function inumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true

    } else {
        return false
    }
}

function innlista(n, v) {
    if(v.indexOf(Number(n)) == -1) {
        return false 
    } else {
        return true
    }
} 


function adicionar() {
    res.innerHTML = ''
    if (inumero(num.value) && !innlista(num.value, valores)) {
        var opt = window.document.createElement('option')
        lista.appendChild(opt) 
        valores.push(Number(num.value))
        opt.innerHTML += `Valor ${num.value} adicíonado`           
    } else {
        window.alert('valor iválido ou já encontrado')
    }
    num.value = ''
    num.focus()

}

function finalizar() {
    if(valores.length === 0) {
        window.alert('impossivel finalizár campo vazio')
    } else {
        var maior = valores[0] 
        var menor = valores[0]
        for( var pos = 0 ; pos <= valores.length; pos++) {
            if(valores[pos] > maior ) {
                maior = valores[pos]
            }

            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }     
        res.innerHTML += `Ao todo, temos ${valores.length} numeros cadastrados </br>`
        var prime = valores[0]
        res.innerHTML += `O primeiro valor informado foi ${prime}</br>`
        res.innerHTML += `O maior valor informado foi ${maior}</br>`
        res.innerHTML += `O menor valor informado foi ${menor}</br>`
    }
}