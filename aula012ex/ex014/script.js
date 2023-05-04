function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        //bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#DAC7A2'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#7E939E'
    } else {
        //boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#271F28'
    }
}

