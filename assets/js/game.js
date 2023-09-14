
let altura_tela = 0
let largura_tela = 0







function ajustaPalco(){
    altura_tela = window.innerHeight
    largura_tela = window.innerWidth
    console.log(largura_tela, altura_tela)
    
}
ajustaPalco()

function posicao_randomica(){

    if(document.querySelector(".imagem_mosquito")){
       document.querySelector(".imagem_mosquito").remove()

        document.querySelector("#v1").src = "./assets/img/coracao_vazio.png"
    }

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
    mosquito.style.transform = ladoMosquito()
    mosquito.id = tamanhoMosquito()

    mosquito.onclick=function(){
    
        this.remove()
        
    }

}



function tamanhoMosquito(){
    let tamanho_mosquito = Math.round(Math.random() * 3)

    switch(tamanho_mosquito){
        case 1:
            return "tamanho_1"
        case 2:
            return "tamanho_2"
        case 3:
            return "tamanho_3"
        default:
            return 
    }
}

function ladoMosquito(){
    let lado_mosquito = Math.round(Math.random())

    switch(lado_mosquito){
        case 0:
            return 'scaleX(-1)';
        default:
            return 'scaleX(1)';
    }
}
