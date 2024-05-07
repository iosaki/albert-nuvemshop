// Função para criar a bola com o balão de texto
function createBall() {
  var ball = document.createElement('div');
  ball.className = 'ball';
  ball.textContent = 'A';
  document.body.appendChild(ball);

  // Adiciona eventos de mouse para exibir e esconder o balão de texto
  ball.addEventListener('mouseenter', showBalloon);
  // Remova o evento para esconder o balão no hover out
  // ball.addEventListener('mouseleave', hideBalloon);
}

// Função para exibir o balão de texto
function showBalloon(event) {
  var balloon = document.createElement('div');
  balloon.className = 'balloon';

  // Texto do balão
  var balloonText = document.createElement('p');
  balloonText.textContent = 'Aqui tem cashback do Albert! Para utilizar faça o login com o mesmo e-mail.';

  // Botão de fechar
  var closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.className = 'close-button';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(balloon);
    // Remova o ouvinte de eventos para fechar o balão clicando fora dele
    document.removeEventListener('click', closeOnOutsideClick);
  });

  // Botão de cadastrar
  var registerButton = document.createElement('button');
  registerButton.textContent = 'Quero me cadastrar';
  registerButton.className = 'register-button';
  registerButton.addEventListener('click', redirectToLogin);

  // Adiciona o texto, botão de fechar e botão de cadastrar ao balão
  balloon.appendChild(balloonText);
  balloon.appendChild(closeButton);
  balloon.appendChild(registerButton);

  // Posiciona o balão centralizado na margem direita da tela
  balloon.style.position = 'fixed';
  balloon.style.top = '50%';
  balloon.style.right = '20px'; // Margem direita de 20px
  balloon.style.transform = 'translate(-50%, -50%)'; // Centraliza vertical e horizontalmente

  document.body.appendChild(balloon);

  // Adiciona um ouvinte de eventos para fechar o balão clicando fora dele
  document.addEventListener('click', closeOnOutsideClick);
}

// Função para fechar o balão clicando fora dele
function closeOnOutsideClick(event) {
  var balloon = document.querySelector('.balloon');
  if (balloon && !balloon.contains(event.target)) {
    document.body.removeChild(balloon);
    // Remova o ouvinte de eventos para fechar o balão clicando fora dele
    document.removeEventListener('click', closeOnOutsideClick);
  }
}

// Função para redirecionar para a página de login
function redirectToLogin() {
  // Redirecionar para a página de login
  // window.location.href = 'pagina_de_login.html';
}

// Função para aplicar estilos CSS à bola e ao balão de texto
function applyStyles() {
  var style = document.createElement('style');
  style.textContent = `
    .ball {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: red;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 20px;
      z-index: 2;
    }
    .balloon {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 10px; /* Torna o balão mais quadrado */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      z-index: 999; /* Garante que o balão seja exibido acima de outros elementos */
    }
    .close-button, .register-button {
      font-size: 14px;
      background: red;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
    }
    .close-button {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    .register-button {
      display: block;
      margin-top: 20px; /* Adiciona margem acima do botão de cadastrar */
    }
  `;
  document.head.appendChild(style);
}

// Chama as funções para criar a bola com o balão de texto e aplicar os estilos
createBall();
applyStyles();
