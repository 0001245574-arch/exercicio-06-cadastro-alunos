
// Captura os elementos HTML
const botao = document.getElementById("btnAdicionar");
const campoNome = document.getElementById("nomeAluno");
const listaAlunos = document.getElementById("listaAlunos");

// Detecta o clique no botão
botao.addEventListener("click", function () {

    // Pega o nome digitado
    const nome = campoNome.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome!");
        campoNome.focus();
        return;
    }

    // Cria um novo item
    const novoLi = document.createElement("li");

    // Coloca o nome no item
    novoLi.textContent = nome;

    // Adiciona o item à lista
    listaAlunos.appendChild(novoLi);

    // Limpa o campo
    campoNome.value = "";

    campoNome.focus();
});

// Permite adicionar pressionando Enter
campoNome.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        botao.click();
    }
});
