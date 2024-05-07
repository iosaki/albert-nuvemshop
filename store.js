document.addEventListener("DOMContentLoaded", function () {
  function criarBalao() {
    // Criar elemento div para o balão de texto
    var balao = document.createElement("div");
    balao.className = "balao";

    // Adicionar ícone de fechar com SVG
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

    // Adicionar logo dentro do balão
    var logo = document.createElement("img");
    logo.src = "https://albert-mkt.s3.amazonaws.com/albert+muito+ale%CC%81m+de+cashback.png";
    logo.alt = "Logo";
    logo.style.height = "70px";
    logo.style.width = "auto";
    balao.appendChild(logo);

    // Adicionar texto dentro do balão
    // Adicionar texto dentro do balão
// Adicionar texto dentro do balão
var texto = document.createElement("p");
texto.innerHTML = `
  <strong>Tem cashback te esperando no final da compra!</strong><br><br>Faça o login por aqui com o mesmo e-mail que cadastrou no Albert para conseguir usar seu cashback, ok?<br><br>
  Ah, e se você ainda não é um associado Albert, clique aqui:
`;
texto.style.margin = "10px 10px 30px 10px";
texto.style.textAlign = "justify"; // Adicionando o estilo para justificar o texto

balao.appendChild(texto);

// Criar botão dentro do balão
var botao = document.createElement("a");
botao.style.textDecoration = "none";
botao.textContent = "Quero cashback";
botao.href = "https://associados.oialbert.com.br/criar-conta?code=SEJAASSOCIADO";
botao.target = "_blank"; // Abrir em uma nova aba
botao.style.background = "linear-gradient(90deg, #ff281e, #ff005a)";
botao.style.color = "#fff";
botao.style.borderRadius = "10px"; // Aumentando o raio para deixar as bordas mais arredondadas
botao.style.padding = "10px"
botao.style.cursor = "pointer";
botao.style.fontWeight = "bold";
balao.appendChild(botao);


    // Estilos CSS para o balão
    balao.style.position = "fixed";
    balao.style.height = "350px"; // Ajustado para acomodar o botão
    balao.style.width = "250px";
    balao.style.top = "60%";
    balao.style.right = "30px"; // Ajuste para a margem direita
    balao.style.transform = "translateY(-50%)";
    balao.style.padding = "10px 20px";
    balao.style.backgroundColor = "#fff"; 
    balao.style.border = "1px solid #ccc";
    balao.style.borderRadius = "5px";
    balao.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    balao.style.zIndex = "99";
    balao.style.opacity = "0";

    // Adicionar o balão à página
    document.body.appendChild(balao);

    return balao;
  }

  function mostrarBalao() {
    var balao = document.querySelector(".balao");
    // Transição de opacidade para mostrar o balão
    balao.style.transition = "opacity 0.5s ease"; // Tempo e tipo de transição
    balao.style.opacity = "1"; // Mostrar o balão
  }

  function esconderBalao() {
    var balao = document.querySelector(".balao");
    // Transição de opacidade para esconder o balão
    balao.style.transition = "opacity 0.5s ease"; // Tempo e tipo de transição
    balao.style.opacity = "0"; // Ocultar o balão
  }

  function criarBotao() {
    // Criar elemento <a> com a classe 'ball'
    var link = document.createElement("a");
    link.className = "ball";
    link.title = "Show Chat";
    link.textContent = "aqui tem cashback!";

    // Adicionar estilos CSS inline
    link.style.background =
      "linear-gradient(-50deg, #ff281e, #ff005a, #C00044, #D3004B, #FF143C)";
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
        0% {
          background-position: 0 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0 50%;
        }
      }
    `;
    document.head.appendChild(style);

    // Adicionar o botão à página
    document.body.appendChild(link);

    // Adicionar evento de mouseover para mostrar o balão
    link.addEventListener("mouseover", mostrarBalao);
  }

  // Chamar a função para criar o botão e o balão
  criarBotao();
  criarBalao();
});
