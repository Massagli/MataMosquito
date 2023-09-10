let altura_tela = 0
let largura_tela = 0

function ajustaPalco(){
    altura_tela = window.innerHeight
    largura_tela = window.innerWidth
    console.log(largura_tela, altura_tela)
    
}
ajustaPalco()

function posicao_randomica(){
    let eixoX = Math.floor(Math.random()*largura_tela)-90;
    let eixoY = Math.floor(Math.random()*altura_tela)-90;

    eixoX = eixoX < 0 ? 0 : eixoX
    eixoY = eixoY < 0 ? 0 : eixoY


    console.log(eixoX, eixoY)

    var mosquito = document.createElement("img")
    mosquito.src = "./assets/img/mosquito.png"
    document.body.appendChild(mosquito)
    mosquito.className = "imagem_mosquito"
    mosquito.style.left = `${eixoX}px`
    mosquito.style.top = `${eixoY}px`
}

