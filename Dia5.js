let resposta = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)");
let categorias = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    vegetais: []
}

let vazios = true;

while(resposta == 'sim'){
    item = prompt("Qual comida deseja inserir?");
    let categoria = prompt("Em qual categoria esta comida se encaixa? (frutas/laticínios/congelados/doces/vegetais)");

    if(categorias[categoria]){
        categorias[categoria].push(item);
    } else {
        alert("Categoria inválida.");
    }
    
    resposta = prompt("Deseja inserir outra comida? (sim/não)");
}

for(const categoria in categorias) {
    if(categorias[categoria].length > 0) {
        vazios = false;
        break;
    }
}

if (resposta == "não" && vazios) {
    alert("Até a próxima então.");
} else if (resposta == "não") {
    alert(`Aqui está sua lista de compras: 
    Frutas: ${categorias.frutas}
    Laticínios: ${categorias.laticinios}
    Congelados: ${categorias.congelados}
    Doces: ${categorias.doces}
    Vegetais: ${categorias.vegetais}`);
} else {
    alert("Resposta inválida.");
}