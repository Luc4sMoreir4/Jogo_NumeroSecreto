let listaDeNumeroDeNumerosSorteados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsivevoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'numero secreto ')
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce acertou o numero com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
     else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','o numero é menor ');
        }
        else{
            exibirTextoNaTela('p','o numero é maior ');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadesDeElementosNalista = listaDeNumeroDeNumerosSorteados.length

    if(quantidadesDeElementosNalista == numeroLimite){
        listaDeNumeroDeNumerosSorteados = []
    }

    if (listaDeNumeroDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumeroDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumeroDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}