function criarBalao() {
  // Criar elemento div para o balão de texto
  var balao = document.createElement("div");
  balao.className = "balao";
  
  // Adicionar ícone "X" no canto superior direito
  var closeButton = document.createElement("span");
  closeButton.textContent = "x";
  closeButton.style.position = "absolute";
  closeButton.style.top = "5px";
  closeButton.style.right = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", esconderBalao);
  balao.appendChild(closeButton);
  
  // Adicionar texto dentro do balão
  var texto = document.createElement("p");
  texto.textContent = "Esta loja te dá cashback nas suas compras. Se você já tem conta no albert, é só se logar com o mesmo e-mail utilizado, caso não tenha, crie uma conta já.";
  balao.appendChild(texto);
  
  // Estilos CSS para o balão
  balao.style.position = "fixed";
  balao.style.height = "150px";
  balao.style.width = "250px";
  balao.style.top = "65%";
  balao.style.right = "10px"; // Ajuste para a margem direita
  balao.style.transform = "translateY(-50%)";
  balao.style.padding = "10px 20px";
  balao.style.backgroundColor = "#fff";
  balao.style.border = "1px solid #ccc";
  balao.style.borderRadius = "5px";
  balao.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
  balao.style.zIndex = "99";
  balao.style.display = "none"; // Inicialmente oculto
  
  // Adicionar o balão à página
  document.body.appendChild(balao);
  
  // Adicionar evento de mouseover para manter o balão visível
  balao.addEventListener("mouseover", function() {
    balao.dataset.hover = "true";
  });
  // Adicionar evento de mouseout para esconder o balão apenas se não estiver "hovered"
  balao.addEventListener("mouseout", function() {
    if (!balao.dataset.hover) {
      balao.style.display = "none";
    }
  });
  
  return balao;
}

function mostrarBalao() {
  var balao = document.querySelector(".balao");
  balao.style.display = "block";
}

function esconderBalao() {
  var balao = document.querySelector(".balao");
  balao.style.display = "none";
}

function criarBotao() {
  // Criar elemento <a> com a classe 'ball'
  var link = document.createElement("a");
  link.className = "ball";
  link.title = "Show Chat";
  link.textContent = "aqui tem cashback!"; // Adicionando texto

  // Adicionar estilos CSS inline
  link.style.background =
    "linear-gradient(-50deg, #ee5952, #ea3a7e, #20aadb, #23e0b3)";
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
  
  // Adicionar evento de click para mostrar o balão
  link.addEventListener("click", function() {
    mostrarBalao();
    var balao = document.querySelector(".balao");
    balao.dataset.hover = "true"; // Mantém o balão visível quando clicado
  });
}

// Chamar a função para criar o botão e o balão
criarBotao();
criarBalao();
