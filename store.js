// Função para criar o sinal de dinheiro giratório
function createMoneySign() {
  var moneySign = document.createElement('div');
  moneySign.className = 'money-sign';
  moneySign.innerHTML = '$';
  document.body.appendChild(moneySign);
}

// Função para aplicar estilos CSS ao sinal de dinheiro
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
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}

// Chama as funções para criar o sinal de dinheiro e aplicar os estilos
createMoneySign();
applyStyles();
