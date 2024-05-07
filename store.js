function criarBotao() {
    // Criar elemento <a> com a classe 'ball'
    var link = document.createElement("a");
    link.className = "ball";
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
