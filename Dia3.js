let opc = 1;
let escolha2 = "";
let areaEscolhida = "";
const areaGeral = prompt("Olá, programador. Qual área quer seguir? Digite 1 para Front-End ou 2 para Back-End.")


if (areaGeral == 1) {
    areaEscolhida = "Front-End"
    const areaFront = prompt("Deseja focar em aprender o que? Digite 1 para React ou 2 para Vue.")
    if (areaFront == 1) {
        escolha2 = "React";
    } else {
        escolha2 = "Vue";
    }
} else if (areaGeral == 2) {
    areaEscolhida = "Back-End"
    const areaBack = prompt("Deseja focar em aprender o que? Digite 1 para C# ou 2 para Java.")
    if (areaBack == 1) {
        escolha2 = "C#";
    } else {
        escolha2 = "Java";
    }
}

const decisãoFinal = prompt("Digite 1 se quiser seguir se especializando ou 2 se quiser se tornar Fullstack.")
    if (decisãoFinal == 1) {
        alert(`Continue se especializando em ${escolha2} para dominar a área de ${areaEscolhida}`)
    } else {
            alert(`Terá que aprender outras linguagens além de ${escolha2} para se tornar Fullstack. Boa sorte!`)
    }

let msg = prompt("Tem alguma outra linguagem que deseja aprender? Digite 1 se sim.")

while (msg == 1){
    let novaTecnologia = prompt("Escreva aqui a tecnologia que deseja aprender.");
    alert(`${novaTecnologia} é realmente uma linguagem incrivel de se aprender!`);
    msg = prompt("Há alguma outra que queira aprender? Digite 1 se sim ou 2 para não.")
}

