function fcapitalizar(colecao, attr) {
    if (colecao, attr > 0){
        return typeof colecao[0] == 'object' && attr?
            colecao.map(item => item[attr] = item[attr].charAt(o).toUpperCase()
            colecao.map(item => item = item.charAt(0).toUpperCase() + )
    }
}

function fcaixaAlta(vetor) {
    if (colecao.length > 0){
        return typeof colecao(0) == 'object' && attr?
            colecao.map(item => item[attr] = item[attr].toUpperCase())
            colecao.map(item => item = item.toUpperCase())
    }
}


function fordenar(vetor) {
    return attr?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        });
        colecao.sort(function(a,b){
            return typeof a == 'number' ?
            a - b :
            a.localeCompare(b)
        });
    
}


export default {
    capitalizar: fcapitalizar,
    caixaAlta: fcaixaAlta,
    ordenar: fordenar
}

