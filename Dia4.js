let numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let numeroEscolhido = "";
let acerto = false;
numTentativas = 3;
numeroEscolhido = prompt(`Tente adivinhar o número que estou pensando de 0 a 10! Você tem ${numTentativas} tentativas restantes.`);
for (let i = numTentativas; i > 1;i--) {
    if (numeroEscolhido == numeroAleatorio) {
        alert(`Parabéns! Você ganhou, o número era ${numeroAleatorio}.`);
        acerto = true;
        break;
    } else {
        numeroEscolhido = prompt(`Você errou! ${i-1} tentativas restantes.`)
    }
}
if(!acerto){
    alert(`Você perdeu! O número era ${numeroAleatorio}.`);
}