// Função para criar o sinal de dinheiro giratório
function createMoneySign() {
  var moneySign = document.createElement('div');
  moneySign.className = 'money-sign';
  moneySign.innerHTML = '$';
  document.body.appendChild(moneySign);

  // Adiciona eventos de mouse para exibir e esconder o balão de texto
  moneySign.addEventListener('mouseenter', showBalloon);
  moneySign.addEventListener('mouseleave', hideBalloon);
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
  });

  // Adiciona o texto e o botão de fechar ao balão
  balloon.appendChild(balloonText);
  balloon.appendChild(closeButton);

  // Posiciona o balão acima e à esquerda do símbolo de dinheiro
  var moneySign = event.target;
  var rect = moneySign.getBoundingClientRect();
  balloon.style.position = 'fixed';
  balloon.style.top = rect.top - balloon.offsetHeight + 'px';
  balloon.style.left = rect.left + 'px';

  document.body.appendChild(balloon);
}

// Função para esconder o balão de texto
function hideBalloon() {
  var balloon = document.querySelector('.balloon');
  if (balloon) {
    document.body.removeChild(balloon);
  }
}

// Função para aplicar estilos CSS ao sinal de dinheiro e ao balão de texto
function applyStyles() {
  var style = document.createElement('style');
  style.textContent = `
    .money-sign {
      position: fixed;
      bottom: 20px;
      right: 20px;
      font-size: 24px;
      color: green;
      animation: spin 2s linear infinite;
      cursor: pointer; /* Adiciona cursor de ponteiro para indicar que é clicável */
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .balloon {
      position: absolute;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      z-index: 999; /* Garante que o balão seja exibido acima de outros elementos */
    }

    .close-button {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 14px;
      background: none;
      border: none;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
}

// Chama as funções para criar o sinal de dinheiro, aplicar os estilos e adicionar os eventos de mouse
createMoneySign();
applyStyles();
