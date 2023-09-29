let resposta = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)").toLowerCase();
let resposta2;
let categorias = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    vegetais: []
}

let questao;

while (resposta == 'sim') {
    item = prompt("Qual comida deseja inserir?");
    let categoria = prompt("Em qual categoria esta comida se encaixa? (frutas/laticínios/congelados/doces/vegetais)").toLowerCase();

    if (categorias[categoria]) {
        categorias[categoria].push(item);
    } else {
        alert("Categoria inválida.");
    }

    resposta = prompt("Deseja inserir outra comida? (sim/não)").toLowerCase();
}

if (resposta == "não" && categorias.frutas.length === 0 && categorias.laticinios.length === 0 && categorias.congelados.length === 0 && categorias.doces.length === 0 && categorias.vegetais.length === 0) {
    alert("Até a próxima então.");
} else if (resposta == "não") {

    alert(`Aqui está sua lista de compras: 
    Frutas: ${categorias.frutas}
    Laticínios: ${categorias.laticinios}
    Congelados: ${categorias.congelados}
    Doces: ${categorias.doces}
    Vegetais: ${categorias.vegetais}`);

    if (categorias.frutas.length === 0 && categorias.laticinios.length === 0 && categorias.congelados.length === 0 && categorias.doces.length === 0 && categorias.vegetais.length === 0) {
        alert("Não há mais nada na sua lista.");
    } else {
        resposta2 = prompt("Deseja eliminar algum item? (sim/não)").toLowerCase();
    }

    while (resposta2 == "sim") {
        if (categorias.frutas.length === 0 && categorias.laticinios.length === 0 && categorias.congelados.length === 0 && categorias.doces.length === 0 && categorias.vegetais.length === 0) {
            alert("Não há mais nada na sua lista.");
            resposta2 = "não";
            break;        
        } else {
        questao = prompt("escreva o item que deseja eliminar.");
        }
        for (const categoria in categorias) {
            if (categorias[categoria].includes(questao)) {
                let indice = categorias[categoria].indexOf(questao);
                if (indice !== -1) {
                    const elementoRemovido = categorias[categoria].splice(indice, 1);
                    categorias[categoria].push(elementoRemovido[0]);
                    categorias[categoria].pop();

                    alert(`Aqui está sua nova lista de compras: 
                    Frutas: ${categorias.frutas}
                    Laticínios: ${categorias.laticinios}
                    Congelados: ${categorias.congelados}
                    Doces: ${categorias.doces}
                    Vegetais: ${categorias.vegetais}`);

                    if (categorias.frutas.length != 0 || categorias.laticinios.length != 0 || categorias.congelados.length != 0 || categorias.doces.length != 0 || categorias.vegetais.length != 0) {
                        resposta2 = prompt("Deseja eliminar outro item? (sim/não)").toLowerCase();;
                    }
                }
            } else if (categorias[categoria].includes(questao) == false && categorias.frutas.length != 0 || categorias.laticinios.length != 0 || categorias.congelados.length != 0 || categorias.doces.length != 0 || categorias.vegetais.length != 0) {
                alert("Elemento não encontrado na array.");
                resposta2 = prompt("Deseja remover outro item? (sim/não)").toLowerCase();
                break;
            }
        }

    } 
    
    if (resposta2 == "não") {
        alert(`Aqui está sua lista de compras atualizada: 
        Frutas: ${categorias.frutas}
        Laticínios: ${categorias.laticinios}
        Congelados: ${categorias.congelados}
        Doces: ${categorias.doces}
        Vegetais: ${categorias.vegetais}`);
    } else {
        alert("Resposta inválida.");
    }
} else {
    alert("Resposta inválida.");
}