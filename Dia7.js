function multiplicacao(a, b) {
    return a * b;
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    return a / b;
}

let x;
let y;
let result;
let op;
let resposta = "sim";

while (resposta == "sim") {
    x = parseInt(prompt("Digite um número inteiro:"));
    y = parseInt(prompt("Digite outro número inteiro:"));
    op = prompt("Qual operação deseja fazer? 1 - Soma 2 - Subtração 3 - Divisão 4 - Multiplicação 5 - sair");

    switch (op) {
        case '1':
            result = soma(x, y);
            alert(`A soma resulta em: ${result}`);
            resposta = prompt("Deseja fazer outra operação? (sim/não)");
            break;

        case '2':
            result = subtracao(x, y);
            alert(`A subtração resulta em: ${result}`);
            resposta = prompt("Deseja fazer outra operação? (sim/não)");
            break;

        case '3':
            result = divisao(x, y);
            alert(`A divisão resulta em: ${result}`);
            resposta = prompt("Deseja fazer outra operação? (sim/não)");
            break;

        case '4':
            result = multiplicacao(x, y);
            alert(`A multiplicação resulta em: ${result}`);
            resposta = prompt("Deseja fazer outra operação? (sim/não)");
            break;

        case '5':
            resposta = "não";
            break;

        default:
            alert("invalido");
    }
}

if(resposta == "não") {
    alert("Até a próxima.");
}
