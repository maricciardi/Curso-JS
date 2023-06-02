function adicionar() {
    var numero = document.getElementById('txtnum')
    var valores = document.getElementById('valores')
    var n = Number(numero.value)
    

    if (numero.value.length == 0){
        alert('Por favor, digite um número!')
    } else if (n < 1 || n > 100 ) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        
        var valor = document.createElement('option')
        valor.text = `Valor ${n} adicionado. `
        valores.appendChild(valor)
    }

}

function finalizar() {
    
}