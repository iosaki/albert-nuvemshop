// Função para verificar se o usuário está logado
function isUserLoggedIn() {
    var loggedInElement = document.querySelector('a[href="/account"]');
    return loggedInElement !== null;
}

// Função para criar o balão (modal) para usuários não logados
function criarBalaoDeslogado() {
  var balao = document.createElement("div");
  balao.className = "balao";

  // Adicionar botão de fechar
  var closeButton = document.createElement("button");
  closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10m-10 0l10-10"/>
      </svg>`;
  closeButton.className = "close-button";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.border = "none";
  closeButton.style.backgroundColor = "transparent";
  closeButton.addEventListener("click", esconderBalao);
  balao.appendChild(closeButton);

  // Adicionar logo
  var logo = document.createElement("img");
  logo.src = "https://albert-mkt.s3.amazonaws.com/albert+muito+ale%CC%81m+de+cashback.png";
  logo.alt = "Logo";
  logo.style.height = "70px";
  logo.style.display = "block";
  logo.style.margin = "0 auto";
  logo.style.width = "auto";
  balao.appendChild(logo);

  // Adicionar texto
  var texto = document.createElement("p");
  texto.innerHTML = `
  <strong>Tem cashback te esperando no final da compra!</strong><br><br>Faça o login por aqui com o mesmo e-mail que cadastrou no Albert ou clique abaixo para se cadastrar
  `;
  texto.style.margin = "10px 10px 30px 10px";
  texto.style.textAlign = "justify";
  balao.appendChild(texto);

  // Adicionar botão
  var botao = document.createElement("a");
  botao.style.textDecoration = "none";
  botao.textContent = "Quero cashback";
  botao.href = "https://associados.oialbert.com.br/criar-conta?code=SEJAASSOCIADO";
  botao.target = "_blank";
  botao.style.background = "linear-gradient(90deg, #ff281e, #ff005a)";
  botao.style.color = "#fff";
  botao.style.borderRadius = "10px";
  botao.style.padding = "10px";
  botao.style.cursor = "pointer";
  botao.style.fontWeight = "bold";
  balao.style.padding = "10px 20px";
  balao.style.textAlign = "center";
  balao.appendChild(botao);

  // Estilos CSS para o balão
  balao.style.position = "fixed";
  balao.style.height = "250px"; // Altura ajustada
  balao.style.width = "250px";  // Largura mantida
  balao.style.top = "75%";
  balao.style.right = "30px";
  balao.style.transform = "translateY(-50%)";
  balao.style.padding = "10px 20px";
  balao.style.backgroundColor = "#ffff";
  balao.style.border = "1px solid #ccc";
  balao.style.borderRadius = "5px";
  balao.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
  balao.style.zIndex = "99";
  balao.style.opacity = "0"; // Iniciar com opacidade 0

  document.body.appendChild(balao);
  return balao;
}

// Função para criar o balão (modal) para usuários logados
function criarBalaoLogado() {
  var balao = document.createElement("div");
  balao.className = "balao";

  // Adicionar botão de fechar
  var closeButton = document.createElement("button");
  closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10m-10 0l10-10"/>
      </svg>`;
  closeButton.className = "close-button";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.border = "none";
  closeButton.style.backgroundColor = "transparent";
  closeButton.addEventListener("click", esconderBalao);
  balao.appendChild(closeButton);

  // Adicionar logo
  var logo = document.createElement("img");
  logo.src = "https://albert-mkt.s3.amazonaws.com/albert+muito+ale%CC%81m+de+cashback.png";
  logo.alt = "Logo";
  logo.style.height = "70px";
  logo.style.display = "block";
  logo.style.margin = "0 auto";
  logo.style.width = "auto";
  balao.appendChild(logo);

  // Adicionar texto
  var texto = document.createElement("p");
  texto.innerHTML = `
  <strong>Olá, você deseja utilizar seu cashback nesta compra?</strong>
  `;
  texto.style.margin = "10px 10px 30px 10px";
  texto.style.textAlign = "justify";
  balao.appendChild(texto);

  // Adicionar checkbox
  var checkboxLabel = document.createElement("label");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkboxLabel.textContent = " Quero utilizar cashback";
  checkboxLabel.prepend(checkbox);
  balao.appendChild(checkboxLabel);

  // Estilos CSS para o balão
  balao.style.position = "fixed";
  balao.style.height = "250px"; // Altura ajustada
  balao.style.width = "250px";  // Largura mantida
  balao.style.top = "75%";
  balao.style.right = "30px";
  balao.style.transform = "translateY(-50%)";
  balao.style.padding = "10px 20px";
  balao.style.backgroundColor = "#ffff";
  balao.style.border = "1px solid #ccc";
  balao.style.borderRadius = "5px";
  balao.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
  balao.style.zIndex = "99";
  balao.style.opacity = "0"; // Iniciar com opacidade 0

  document.body.appendChild(balao);
  return balao;
}

// Função para mostrar o balão
function mostrarBalao() {
  var balao = document.querySelector(".balao");
  balao.style.transition = "opacity 0.5s ease";
  balao.style.opacity = "1"; // Mostrar o balão
}

// Função para esconder o balão
function esconderBalao() {
  var balao = document.querySelector(".balao");
  balao.style.transition = "opacity 0.5s ease";
  balao.style.opacity = "0"; // Ocultar o balão
}

// Função para criar o botão "aqui tem cashback!" para usuários deslogados
function criarBotaoCashback() {
  var link = document.createElement("a");
  link.className = "ball";
  link.textContent = "aqui tem cashback!";
  link.style.background = "linear-gradient(-50deg, #ff281e, #ff005a, #C00044, #D3004B, #FF143C)";
  link.style.backgroundSize = "320% 200%";
  link.style.animation = "Gradient 15s ease infinite";
  link.style.color = "#fff";
  link.style.position = "fixed";
  link.style.zIndex = "98";
  link.style.bottom = "25px";
  link.style.right = "30px";
  link.style.fontSize = "15px";
  link.style.padding = "10px 20px";
  link.style.borderRadius = "30px";
  link.style.boxShadow = "0 1px 15px rgba(32, 33, 36, 0.28)";

  // Adicionar animações de gradiente
  var style = document.createElement("style");
  style.textContent = `
    @keyframes Gradient {
      0% { background-position: 0 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0 50%; }
    }
  `;
  document.head.appendChild(style);

  // Adicionar o botão à página
  document.body.appendChild(link);

  // Adicionar evento de mouseover para mostrar o balão
  link.addEventListener("mouseover", mostrarBalao);
}

// Função para criar o botão "Albert" para usuários logados
function criarBotaoAlbert() {
  var link = document.createElement("a");
  link.className = "ball";
  link.textContent = "Albert";
  link.style.background = "linear-gradient(-50deg, #ff281e, #ff005a, #C00044, #D3004B, #FF143C)";
  link.style.backgroundSize = "320% 200%";
  link.style.animation = "Gradient 15s ease infinite";
  link.style.color = "#fff";
  link.style.position = "fixed";
  link.style.zIndex = "98";
  link.style.bottom = "25px";
  link.style.right = "30px";
  link.style.fontSize = "15px";
  link.style.padding = "10px 20px";
  link.style.borderRadius = "30px";
  link.style.boxShadow = "0 1px 15px rgba(32, 33, 36, 0.28)";

  // Adicionar animações de gradiente
  var style = document.createElement("style");
  style.textContent = `
    @keyframes Gradient {
      0% { background-position: 0 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0 50%; }
    }
  `;
  document.head.appendChild(style);

  // Adicionar o botão à página
  document.body.appendChild(link);

  // Adicionar evento de mouseover para mostrar o balão
  link.addEventListener("mouseover", mostrarBalao);
}

// Função para inicializar o balão ou o modal baseado no estado de login
function inicializarComponentes() {
    if (isUserLoggedIn()) {
        criarBotaoAlbert(); // Botão "Albert" para usuários logados
        var balaoLogado = criarBalaoLogado(); 
        mostrarBalao(); // Mostrar o balão para usuários logados
    } else {
        criarBotaoCashback(); // Botão "aqui tem cashback!" para usuários deslogados
        var balaoDeslogado = criarBalaoDeslogado();
        mostrarBalao(); // Mostrar o balão para usuários não logados
    }
}

// Inicializar os componentes ao carregar a página
inicializarComponentes();
