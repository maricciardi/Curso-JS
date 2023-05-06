function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade>= 0 && idade < 4) {
                img.setAttribute('src', 'imagens/bebemenino.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade < 70) {
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade>= 0 && idade < 4) {
                img.setAttribute('src', 'imagens/bebemenina.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if (idade < 70) {
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}