// Função para adicionar um novo botão ao corpo do documento
function adicionarNovoBotao() {
    // Cria um novo elemento de botão
    var novoBotao = document.createElement("button");
    // Define o texto do botão
    novoBotao.innerText = "Novo Botão";
    // Adiciona um evento de clique ao botão
    novoBotao.onclick = function() {
        alert("Novo botão clicado!");
    };
    // Obtém o corpo do documento
    var corpoDocumento = document.body;
    // Adiciona o novo botão ao corpo do documento
    corpoDocumento.appendChild(novoBotao);
}

// Chama a função para adicionar o novo botão quando a página for carregada
window.onload = function() {
    adicionarNovoBotao();
};
