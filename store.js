// Função genérica para criar o balão (modal)
function criarBalao(contentHTML, includeCheckbox = false, width = "250px", height = "250px") {
  var balao = document.createElement("div");
  balao.className = "balao";

  // Adicionar botão de fechar
  var closeButton = document.createElement("button");
  closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10m-10 0l10-10"/>
      </svg>`;
  closeButton.className = "close-button";
  closeButton.addEventListener("click", esconderBalao);
  balao.appendChild(closeButton);

  // Adicionar logo
  var logo = document.createElement("img");
  logo.src = "https://albert-mkt.s3.amazonaws.com/albert+muito+ale%CC%81m+de+cashback.png";
  logo.alt = "Logo";
  logo.className = "balao-logo";
  balao.appendChild(logo);

  // Adicionar conteúdo
  var texto = document.createElement("div");
  texto.innerHTML = contentHTML;
  texto.className = "balao-texto";
  balao.appendChild(texto);

  // Se necessário, adicionar checkbox
  if (includeCheckbox) {
    var checkboxLabel = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxLabel.textContent = " Quero utilizar cashback";
    checkboxLabel.prepend(checkbox);
    balao.appendChild(checkboxLabel);
  }

  // Estilos e estrutura do balão
  balao.classList.add("balao-estilo"); // Aplicar classes de estilo

  // Definir largura e altura específicas
  balao.style.width = width;
  balao.style.height = height;

  document.body.appendChild(balao);
  return balao;
}

// Função para criar o conteúdo específico para usuários deslogados
function criarConteudoDeslogado() {
  return `
    <strong>Tem cashback te esperando no final da compra!</strong><br><br>
    Faça o login por aqui com o mesmo e-mail que cadastrou no Albert ou clique abaixo para se cadastrar.<br><br>
    <a href="https://associados.oialbert.com.br/criar-conta?code=SEJAASSOCIADO" target="_blank" class="balao-botao">Quero cashback</a>
  `;
}

// Função para criar o conteúdo específico para usuários logados
function criarConteudoLogado() {
  return `
    <strong>Olá, você deseja utilizar seu cashback nesta compra?</strong>
  `;
}

// Função para mostrar o balão
function mostrarBalao() {
  var balao = document.querySelector(".balao");
  balao.style.transition = "opacity 0.5s ease";
  balao.style.opacity = "1"; 
}

// Função para esconder o balão
function esconderBalao() {
  var balao = document.querySelector(".balao");
  balao.style.transition = "opacity 0.5s ease";
  balao.style.opacity = "0"; 
}

// Função para criar o botão com texto e estilo customizados
function criarBotao(textoBotao) {
  var link = document.createElement("a");
  link.className = "ball";
  link.textContent = textoBotao;
  link.classList.add("ball-style"); // Aplicar classe de estilo
  document.body.appendChild(link);

  // Adicionar evento de mouseover para mostrar o balão
  link.addEventListener("mouseover", mostrarBalao);
}

// Função para inicializar o balão ou o modal baseado no estado de login
function inicializarComponentes() {
    if (isUserLoggedIn()) {
        criarBotao("Albert"); // Botão "Albert" para usuários logados
        criarBalao(criarConteudoLogado(), true, "250px", "300px"); 
    } else {
        criarBotao("aqui tem cashback!"); // Botão para deslogados
        criarBalao(criarConteudoDeslogado(), false, "300px", "400px");
    }
}

// Inicializar os componentes ao carregar a página
inicializarComponentes();
