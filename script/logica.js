
var dificuldade = prompt('Escolha uma dificuldade');

if(dificuldade == 'facil'){
    dificuldade = 1500;
} else if(dificuldade == 'normal'){
    dificuldade = 1000;
} else if(dificuldade == 'dificil'){
    dificuldade = 500;
} else{
    alert('Ocorreu um erro devido sua escolha')
} 

var contador = 0

setInterval(function () {
    executarProjeto()
}, dificuldade)

function executarProjeto() {
    if ($('#mosquito')) {
        $('#mosquito').remove();
    }

    let altura = window.innerHeight;
    let largura = window.innerWidth;
    let posicaoY = Math.abs(Math.random() * altura - 100);
    let posicaoX = Math.abs(Math.random() * largura - 100);
    let img = window.document.createElement('img');

    img.src = 'imagens/mosquito.png';
    img.id = 'mosquito'
    img.className = 'mosquito ' + mudarTamanho();
    img.style.top = `${posicaoY}px`;
    img.style.left = `${posicaoX}px`;
    window.document.body.appendChild(img);

    $('.mosquito').click(function () {
        contador++
        img.src = 'imagens/sangue.webp';
        if(contador == 15){
            alert('Você ganhou!')
        }
    })

    $('.contador').html(contador)
}

function mudarTamanho() {

    let op = Math.floor(Math.random() * 7)
    if (op == 0) {
        return 'tamanho1';
    } else if (op == 1) {
        return 'tamanho2';
    } else if (op == 2) {
        return 'tamanho3';
    }
    else {
        return 'tamanho4';
    }
}